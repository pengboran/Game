package justep;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.naming.NamingException;

import com.alibaba.fastjson.JSONObject;
import com.justep.baas.Utils;
import com.justep.baas.action.ActionContext;

public class Prize {
	private static String DATASOURCE = "prize";

	public static JSONObject drawPrize(JSONObject params, ActionContext context) throws SQLException, NamingException {
		// 获取参数
		String batch = params.getString("batch");
		int index = params.getInteger("index");
		String weixinID = params.getString("weixinID");

		JSONObject result = new JSONObject();

		Connection conn = context.getConnection(DATASOURCE);
		try {
			conn.setAutoCommit(false);
			try {
				// 获取user
				Statement stat = conn.createStatement();
				try {
					ResultSet rsUser = stat.executeQuery("SELECT * FROM user WHERE fBatch = '" + batch + "' AND fWeixinID = '" + weixinID + "'");
					if (!rsUser.next()) {
						// 未登记
						result.put("code", -2);
					} else if (!Utils.isEmptyString(rsUser.getString("fPrize" + index))) {
						// 已中奖
						result.put("code", -1);
						result.put("prize", rsUser.getString("fPrize" + index));
					} else {
						// 读取奖池
						List<String> prizes = new ArrayList<String>();
						ResultSet rsPrize = stat.executeQuery("SELECT * FROM prize WHERE (fTotal - COALESCE(fCount, 0)) > 0 AND fBatch = '" + batch + "' AND fIndex = " + index);
						while (rsPrize.next()) {
							prizes.add(rsPrize.getString("fName"));
						}
						if (prizes.size() == 0) {
							// 奖池空了
							result.put("code", -3);
						} else {
							Random r = new Random();
							// 看运气
							int luck = r.nextInt(10);
							if (luck > 0) {
								// 未中奖
								result.put("code", 0);
							} else {
								// 抽奖
								luck = r.nextInt(prizes.size());
								String prize = prizes.get(luck);

								int k = stat.executeUpdate("UPDATE prize SET fCOUNT = COALESCE(fCount, 0) + 1 WHERE (fTotal - COALESCE(fCount, 0)) > 0 AND fBatch = '" + batch + "' AND fIndex = "
										+ index + " AND fName = '" + prize + "'");
								if (k == 0) {
									// 未中奖
									result.put("code", 0);
								} else {
									// 记录数据
									stat.executeUpdate("UPDATE user SET fPrize" + index + " = '" + prize + "' WHERE fBatch = '" + batch + "' AND fWeixinID = '" + weixinID + "'");
									result.put("code", 1);
									result.put("prize", prize);
								}
							}
						}
					}
				} finally {
					stat.close();
				}
				conn.commit();
			} catch (SQLException e) {
				conn.rollback();
				throw e;
			}
		} finally {
			conn.close();
		}

		return result;
	}

	public static JSONObject clearData(JSONObject params, ActionContext context) throws SQLException, NamingException {
		String batch = params.getString("batch");

		Connection conn = context.getConnection(DATASOURCE);
		try {
			conn.setAutoCommit(false);
			try {
				// 获取user
				Statement stat = conn.createStatement();
				try {
					stat.executeUpdate("DELETE ANSWER FROM ANSWER JOIN USER ON ANSWER.fUserID = USER.fID AND USER.fBatch = '" + batch + "'");
					stat.executeUpdate("DELETE FROM USER WHERE fBatch = '" + batch + "'");
					stat.executeUpdate("UPDATE PRIZE SET fCOUNT = 0 WHERE fBatch = '" + batch + "'");
				} finally {
					stat.close();
				}
				conn.commit();
			} catch (SQLException e) {
				conn.rollback();
				throw e;
			}
		} finally {
			conn.close();
		}
		return null;
	}

}

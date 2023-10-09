package info;

import java.sql.*;

public class InfoDAO {
	
	String  driver = "com.mysql.cj.jdbc.Driver";
	String  url    = "jdbc:mysql://localhost:3306/basic";
	String  user   = "scott";
	String  pass   = "tiger";
	
	public InfoDAO() throws Exception {
		// 1. 드라이버로딩
		Class.forName(driver);
		
	}
	
	public void insert(InfoVO vo) throws Exception {
		// 2. 연결객체
		Connection con = DriverManager.getConnection(url, user, pass);
		String sql = "INSERT INTO info(name, email) values(?,?)";
		PreparedStatement ps = con.prepareStatement(sql);
		ps.setString(1, vo.getName());
		ps.setString(2, vo.getEmail());
		ps.executeUpdate();
		// 7. 닫기
		ps.close();
		con.close();
	}

}

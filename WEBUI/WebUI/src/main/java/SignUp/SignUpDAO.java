package SignUp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import emp.EmpInfoVO;

public class SignUpDAO {
	String  driver = "com.mysql.cj.jdbc.Driver";
	String  url    = "jdbc:mysql://localhost:3306/basic";
	String  user   = "scott";
	String  pass   = "tiger";
	
	public SignUpDAO() throws Exception {
		Class.forName(driver);
		
	}
	
	public void insert(SignUpVO vo) throws Exception {
		// 2. 연결객체
		Connection con = DriverManager.getConnection(url, user, pass);
		String sql = "INSERT INTO member(name, email, title, content) values(?,?,?,?)";
		PreparedStatement ps = con.prepareStatement(sql);
		ps.setString(1, vo.getName());
		ps.setString(2, vo.getEmail());
		ps.setString(3, vo.getTitle());
		ps.setString(4, vo.getContent());
		ps.executeUpdate();
		// 7. 닫기
		ps.close();
		con.close();
		
	}
	

}

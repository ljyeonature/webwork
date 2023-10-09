package emp;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class EmpInfoDAO {
	
	String  driver = "com.mysql.cj.jdbc.Driver";
	String  url    = "jdbc:mysql://localhost:3306/basic";
	String  user   = "scott";
	String  pass   = "tiger";
	
	public EmpInfoDAO() throws Exception {
		// 1. 드라이버로딩
		Class.forName(driver);
	}
	
	public void insert(EmpInfoVO vo) throws Exception {
		// 2. 연결객체
		Connection con = DriverManager.getConnection(url, user, pass);
		String sql = "INSERT INTO emp(empno, ename, job, hiredate, sal, deptno) values(?,?,?,?,?,?)";
		PreparedStatement ps = con.prepareStatement(sql);
		ps.setInt(1, vo.getEmpno());
		ps.setString(2, vo.getEname());
		ps.setString(3, vo.getJob());
		ps.setString(4, vo.getHiredate());
		ps.setInt(5, vo.getSal());
		ps.setInt(6, vo.getDeptno());
		ps.executeUpdate();
		// 7. 닫기
		ps.close();
		con.close();
		
	}

}

<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
 <%@ page import="emp.*" %>
<%
	// 화면에서 사용자 입력값 얻어오기
	int    empno = Integer.parseInt(request.getParameter("empno"));
	String ename = request.getParameter("ename");
	String job = request.getParameter("job");
	String hiredate = request.getParameter("hiredate");
	int sal = Integer.parseInt(request.getParameter("sal"));
	int deptno = Integer.parseInt(request.getParameter("deptno"));
	
	// 입력값들을 VO 클래스에 멤버로 지정
	EmpInfoVO vo = new EmpInfoVO();
	vo.setEmpno(empno);
	vo.setEname(ename);
	vo.setJob(job);
	vo.setHiredate(hiredate);
	vo.setSal(sal);
	vo.setDeptno(deptno);
	
	// DB로 보내기.
	EmpInfoDAO dao = new EmpInfoDAO();
	dao.insert(vo);
	
/* 	System.out.println("사용자이름 : " +  name);
	System.out.println("사용자이메일 : " +  email); */
	

%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>EmpInsert.jsp</title>
</head>
<body>
	사용자입력값을 받아서 처리
	
	<hr />
	
</body>
</html>
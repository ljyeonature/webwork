<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
 <%@ page import="info.*" %>
<%
	// 화면에서 사용자 입력값 얻어오기
	String name = request.getParameter("name");
	String email = request.getParameter("email");
	
	// 입력값들을 VO 클래스에 멤버로 지정
	InfoVO vo = new InfoVO();
	vo.setName(name);
	vo.setEmail(email);
	
	// DB로 보내기.
	InfoDAO dao = new InfoDAO();
	dao.insert(vo);
	
/* 	System.out.println("사용자이름 : " +  name);
	System.out.println("사용자이메일 : " +  email); */
	

%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>infosave.jsp</title>
</head>
<body>
	사용자입력값을 받아서 처리
	
	<hr />
	
</body>
</html>
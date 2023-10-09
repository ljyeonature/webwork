<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ page import = "SignUp.*" %>    
    <% 
    	// 화면에서 사용자 입력값 얻어오기
    	String name  = request.getParameter("name");
        String email = request.getParameter("email");
        String title = request.getParameter("title");
        String content = request.getParameter("content");
        
   		// 입력값들을 VO 클래스에 멤버로 지정
   		SignUpVO vo = new SignUpVO();
   		vo.setName(name);
   		vo.setEmail(email);
   		vo.setTitle(title);
   		vo.setContent(content);

   		
   		SignUpDAO dao = new SignUpDAO();
   		dao.insert(vo);
   		
   		
   	//	System.out.println("사용자이름 :" + name);
   	//	System.out.println("사용자이메일 :" + email);
    %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title> SignUpinsert.jsp </title>
</head>
<body>

	데이터가 입력되었습니다.
	<hr/>

</body>
</html>
var employees=[
				{
					emp_id:"123",
					emp_name:"manu",
					emp_age:26,
					emp_gender:"female",
					emp_company:"jspiders",
					emp_designation:"software devloper",
					emp_photo:"https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083386__340.jpg",
					emp_salary:30000,
					emp_doj:new Date('2015/12/25'),
					emp_location:"Noida",
					emp_education:"B.E"
				},
				{
					emp_id:"134",
					emp_name:"Tanu",
					emp_age:22,
					emp_gender:"male",
					emp_company:"Cognizant",
					emp_designation:"testing Engineer",
					emp_photo:"https://cdn.pixabay.com/photo/2017/03/04/12/15/programming-2115930__340.jpg",
					emp_salary:30000,
					emp_doj:new Date('2020/11/30'),
					emp_location:"Chennai",
					emp_education:"B.E"
				},
				{
					emp_id:"456",
					emp_name:"anu",
					emp_age:29,
					emp_gender:"female",
					emp_company:"Accenture",
					emp_designation:"software devloper",
					emp_photo:"https://media.istockphoto.com/photos/happy-businesswoman-using-mobile-and-laptop-while-working-at-home-picture-id1259095163?b=1&k=6&m=1259095163&s=170667a&w=0&h=xfgt4tLbBftuZ6RqEGjmYIm3JeHRQlQ7nXzZXvN3kZw=",
					emp_salary:30000,
					emp_doj:new Date('2012/10/22'),
					emp_location:"Mandya",
					emp_education:"MCA"
				},
				{
					emp_id:"123",
					emp_name:"janu",
					emp_age:26,
					emp_gender:"male",
					emp_company:"jspiders",
					emp_designation:"team lead",
					emp_photo:"https://media.istockphoto.com/photos/an-africanamerican-guy-using-laptop-in-the-office-picture-id1254062265?b=1&k=6&m=1254062265&s=170667a&w=0&h=NBx3yfr0gsR0Rz4qZX66VKYrB6RqazAiWIh07kR2r8U=",
					emp_salary:30000,
					emp_doj:new Date('2015/12/25'),
					emp_location:"Noida",
					emp_education:"B.E"
				}]

				var emp = [];
		employees.forEach(function(empData){
			var test = emp.push(`<div class="card" >
								  <img src="${empData.emp_photo}" class="card-img-top" alt="...">
								  <div class="card-body">
								    <h5 class="card-title">${empData.emp_name}</h5>
								    <span class="badge bg-primary float-right ">${empData.emp_id}</span>
								   	<hr class="hr">
								   	<span class="badge bg-primary float-right ">${empData.emp_designation}</span>
								   	<li class="list-group-item"> SALARY: ${empData.emp_salary}</li>
								   	<li class="list-group-item">LOCATION: ${empData.emp_location}</li>
								   	<li class="list-group-item">AGE: ${empData.emp_age}</li>
								   	<li class="list-group-item"> GENDER: ${empData.emp_gender}</li>
								   	<li class="list-group-item">EDUCATION: ${empData.emp_education}</li>
								   	<li class="list-group-item">DOJ: ${empData.emp_doj.toString()}</li>
								   	<li class="list-group-item"> Company: ${empData.emp_company}</li>
								   	
								    <a href="#" class="btn btn-primary">Download cv</a>
								  </div>
								</div>`)

		});

		document.getElementById('temp').innerHTML =emp;
const students = [
	{
		name: "Aarav Sharma",
		marks: 82,
		class: "7th",
		address: "Sector 15, Noida",
	},
	{
		name: "Aditi Patel",
		marks: 75,
		class: "8th",
		address: "Andheri West, Mumbai",
	},
	{
		name: "Ayush Kumar",
		marks: 90,
		class: "9th",
		address: "Koramangala, Bangalore",
	},
	{ name: "Diya Singh", marks: 68, class: "10th", address: "Bandra, Mumbai" },
	{
		name: "Esha Gupta",
		marks: 79,
		class: "11th",
		address: "Connaught Place, Delhi",
	},
	{
		name: "Gaurav Verma",
		marks: 83,
		class: "12th",
		address: "Salt Lake City, Kolkata",
	},
	{
		name: "Hritik Desai",
		marks: 75,
		class: "6th",
		address: "Banjara Hills, Hyderabad",
	},
	{
		name: "Ishaan Bhatt",
		marks: 92,
		class: "7th",
		address: "MG Road, Gurgaon",
	},
	{
		name: "Janhavi Joshi",
		marks: 67,
		class: "8th",
		address: "Indira Nagar, Lucknow",
	},
	{ name: "Kavya Nair", marks: 82, class: "9th", address: "T Nagar, Chennai" },
	{
		name: "Lakshya Roy",
		marks: 78,
		class: "10th",
		address: "Bhawani Nagar, Jaipur",
	},
	{
		name: "Mihir Kapoor",
		marks: 88,
		class: "11th",
		address: "Model Town, Delhi",
	},
	{
		name: "Nandini Mukherjee",
		marks: 71,
		class: "12th",
		address: "Park Street, Kolkata",
	},
	{
		name: "Ojas Patel",
		marks: 85,
		class: "6th",
		address: "Vasundhara Colony, Ghaziabad",
	},
	{
		name: "Priya Sharma",
		marks: 73,
		class: "7th",
		address: "Jubilee Hills, Hyderabad",
	},
	{
		name: "Qasim Khan",
		marks: 92,
		class: "8th",
		address: "DLF Phase 3, Gurgaon",
	},
	{ name: "Rhea Menon", marks: 69, class: "9th", address: "Alwarpet, Chennai" },
	{
		name: "Sahil Gupta",
		marks: 81,
		class: "10th",
		address: "Civil Lines, Kanpur",
	},
	{
		name: "Tanvi Desai",
		marks: 77,
		class: "11th",
		address: "Koregaon Park, Pune",
	},
	{
		name: "Utkarsh Singh",
		marks: 86,
		class: "12th",
		address: "Rajouri Garden, Delhi",
	},
];

studentCount = students.length;

// Render cards for each student

let main = document.querySelector("main");

for (let i = 0; i < studentCount; i++) {
	main.appendChild(document.createElement("div"));
	main.children[i].classList.add("card");
	main.children[i].innerHTML = `<p>Student Name: ${students[i].name}</p>
    <p>Marks: ${students[i].marks}%</p>
    <p>Class: ${students[i].class}</p>
    <p>Address: ${students[i].address}</p>`;
}

// Search function

let search = document.querySelector("#searchInput");
let searchButton = document.querySelector("#search");

searchButton.addEventListener("click", () => {
	let searchValue = search.value.toLowerCase();
	console.log(searchValue);
	let searchResults = students.filter((student) => {
		if (student.name.toLowerCase().startsWith(searchValue)) {
			return student;
		}
	});
	console.log(searchResults);
	if (searchResults.length === 0) {
		main.innerHTML = "<p><i>No results found</i></p>";
	} else {
		main.innerHTML = "";
		searchResults.forEach((student) => {
			main.appendChild(document.createElement("div"));
			main.lastChild.classList.add("card");
			main.lastChild.innerHTML = `<p>Student Name: ${student.name}</p>
            <p>Marks: ${student.marks}%</p>
            <p>Class: ${student.class}</p>
            <p>Address: ${student.address}</p>`;
		});
	}
});

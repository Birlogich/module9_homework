//Задание 1
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser()

const xmlDom = parser.parseFromString(xmlString, "text/xml")
console.log(xmlDom)

const list = []

const listDom = xmlDom.querySelector('list')
const students = listDom.querySelectorAll('student')


students.forEach(student => {
   const name = student.querySelector("name")
   const lang = name.getAttribute('lang')
   list.push({
      name: `${student.querySelector('first').textContent} ${student.querySelector('second').textContent}`,
      age: +`${student.querySelector('age').textContent}`,
      prof: `${student.querySelector('prof').textContent}`,
      lang: `${lang}`,
   })
   console.log(list)
})



//Задание 2

const listOfStudents = {
   "list": [
      {
         "name": "Petr",
         "age": "20",
         "prof": "mechanic"
      },
      {
         "name": "Vova",
         "age": "60",
         "prof": "pilot"
      }
   ]
}

const parsedList = JSON.stringify(listOfStudents)
const data = JSON.parse(parsedList)
console.log(data)
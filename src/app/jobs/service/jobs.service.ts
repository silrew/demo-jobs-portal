import { Injectable } from '@angular/core';
import { of } from 'rxjs'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/Operators'
import { withLatestFrom } from 'rxjs/internal/operators/withLatestFrom';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  
  private jobsListing = [{
    "id": 1,
    "role": "Product Engineer",
    "lndustry": "Accounting",
    "skill": "Crisis Management",
    "city": "Argavand",
    "company": "Green-Wiza",
    "logo": "Mayer, Bogisich and Stehr"
  }, {
    "id": 2,
    "role": "Sales Associate",
    "lndustry": "Engineering",
    "skill": "Electronic Warfare",
    "city": "Mieszkowice",
    "company": "Grant, Hand and Hilpert",
    "logo": "Towne, Daniel and Lynch"
  }, {
    "id": 3,
    "role": "Quality Engineer",
    "lndustry": "Marketing",
    "skill": "Policy Writing",
    "city": "San Antonio",
    "company": "Glover, Zboncak and Runolfsdottir",
    "logo": "Murray, Nolan and Hoppe"
  }, {
    "id": 4,
    "role": "Software Engineer I",
    "lndustry": "Legal",
    "skill": "Obedience",
    "city": "Sipeng",
    "company": "Bode Inc",
    "logo": "Treutel, Nader and Feeney"
  }, {
    "id": 5,
    "role": "Health Coach IV",
    "lndustry": "Legal",
    "skill": "Omnet++",
    "city": "La Estancia",
    "company": "Douglas LLC",
    "logo": "Olson-Waters"
  }, {
    "id": 6,
    "role": "Data Coordiator",
    "lndustry": "Engineering",
    "skill": "Start-up Ventures",
    "city": "Cruz de los Milagros",
    "company": "Ward-Reichel",
    "logo": "Kling-Reinger"
  }, {
    "id": 7,
    "role": "Civil Engineer",
    "lndustry": "Marketing",
    "skill": "TSP",
    "city": "Abomsa",
    "company": "Jast, Swift and Tromp",
    "logo": "Paucek Inc"
  }, {
    "id": 8,
    "role": "Programmer Analyst II",
    "lndustry": "Marketing",
    "skill": "HNI",
    "city": "Namora",
    "company": "Leffler LLC",
    "logo": "Rau and Sons"
  }, {
    "id": 9,
    "role": "Account Executive",
    "lndustry": "Engineering",
    "skill": "SOA BPEL",
    "city": "Saint-Denis",
    "company": "Schmidt and Sons",
    "logo": "Halvorson LLC"
  }, {
    "id": 10,
    "role": "VP Sales",
    "lndustry": "Accounting",
    "skill": "Amazon EBS",
    "city": "Washington",
    "company": "Russel, Treutel and Kertzmann",
    "logo": "Nitzsche Group"
  }, {
    "id": 11,
    "role": "Marketing Assistant",
    "lndustry": "Engineering",
    "skill": "LPR",
    "city": "Perpignan",
    "company": "Langworth-O'Hara",
    "logo": "Bednar LLC"
  }, {
    "id": 12,
    "role": "Assistant Media Planner",
    "lndustry": "Research and Development",
    "skill": "Typeface Design",
    "city": "Loštice",
    "company": "Berge Group",
    "logo": "Schumm-Wilderman"
  }, {
    "id": 13,
    "role": "Graphic Designer",
    "lndustry": "Engineering",
    "skill": "ZeroMQ",
    "city": "Sacapulas",
    "company": "Muller-Farrell",
    "logo": "Doyle-Schmitt"
  }, {
    "id": 14,
    "role": "Staff Scientist",
    "lndustry": "Sales",
    "skill": "Xerox Printers",
    "city": "Shangzhuang",
    "company": "Senger, Gutkowski and Raynor",
    "logo": "Schmidt, Cole and Toy"
  }, {
    "id": 15,
    "role": "Assistant Media Planner",
    "lndustry": "Sales",
    "skill": "NGOs",
    "city": "Pécs",
    "company": "O'Reilly LLC",
    "logo": "Oberbrunner-Bode"
  }, {
    "id": 16,
    "role": "Design Engineer",
    "lndustry": "Services",
    "skill": "Jenark",
    "city": "Gorki Vtoryye",
    "company": "Mante, Wehner and Collins",
    "logo": "Schumm, Koch and Christiansen"
  }, {
    "id": 17,
    "role": "Senior Financial Analyst",
    "lndustry": "Marketing",
    "skill": "HP Quality Center",
    "city": "Ålesund",
    "company": "Hansen LLC",
    "logo": "Christiansen, Hahn and Tillman"
  }, {
    "id": 18,
    "role": "Software Test Engineer IV",
    "lndustry": "Business Development",
    "skill": "Economic Development",
    "city": "Fuxing",
    "company": "Sauer-Hamill",
    "logo": "Kub-Swift"
  }, {
    "id": 19,
    "role": "Pharmacist",
    "lndustry": "Legal",
    "skill": "EBITDA Growth",
    "city": "Temandangjero",
    "company": "Larkin Group",
    "logo": "Harris-Bruen"
  }, {
    "id": 20,
    "role": "Quality Control Specialist",
    "lndustry": "Services",
    "skill": "Routing",
    "city": "Aubervilliers",
    "company": "Ullrich Inc",
    "logo": "Osinski-Lockman"
  }, {
    "id": 21,
    "role": "Quality Engineer",
    "lndustry": "Support",
    "skill": "NDK",
    "city": "Pali",
    "company": "Strosin-Cruickshank",
    "logo": "Spinka-Koelpin"
  }, {
    "id": 22,
    "role": "Health Coach II",
    "lndustry": "Support",
    "skill": "eCTD",
    "city": "Juru",
    "company": "Orn LLC",
    "logo": "Collins-Durgan"
  }, {
    "id": 23,
    "role": "Occupational Therapist",
    "lndustry": "Support",
    "skill": "Home Health Agencies",
    "city": "Greenwood",
    "company": "Cruickshank, Hodkiewicz and Kihn",
    "logo": "Jaskolski-Lebsack"
  }, {
    "id": 24,
    "role": "Data Coordiator",
    "lndustry": "Business Development",
    "skill": "VLC",
    "city": "Banqiao",
    "company": "Herman Group",
    "logo": "Deckow Group"
  }, {
    "id": 25,
    "role": "Web Developer III",
    "lndustry": "Services",
    "skill": "NATO",
    "city": "Rawa",
    "company": "Cronin-Torphy",
    "logo": "Lehner, Hansen and Waelchi"
  }, {
    "id": 26,
    "role": "Automation Specialist III",
    "lndustry": "Support",
    "skill": "vBlock",
    "city": "Pitkyaranta",
    "company": "Ernser and Sons",
    "logo": "Stanton, Walter and Beahan"
  }, {
    "id": 27,
    "role": "Administrative Officer",
    "lndustry": "Research and Development",
    "skill": "Video Production",
    "city": "Zdolbuniv",
    "company": "Bartoletti, Ryan and Rempel",
    "logo": "Hammes-Eichmann"
  }, {
    "id": 28,
    "role": "Human Resources Manager",
    "lndustry": "Legal",
    "skill": "GNU Debugger",
    "city": "Lons-le-Saunier",
    "company": "Paucek-Doyle",
    "logo": "Marks, Heathcote and Stracke"
  }, {
    "id": 29,
    "role": "Director of Sales",
    "lndustry": "Training",
    "skill": "Biology",
    "city": "Tugu",
    "company": "Emard and Sons",
    "logo": "Kunze, Gusikowski and Farrell"
  }, {
    "id": 30,
    "role": "Senior Quality Engineer",
    "lndustry": "Research and Development",
    "skill": "SDA",
    "city": "Arrabal",
    "company": "Spinka and Sons",
    "logo": "Hegmann-Cole"
  }, {
    "id": 31,
    "role": "Statistician IV",
    "lndustry": "Sales",
    "skill": "Psychometrics",
    "city": "Xingxi",
    "company": "Hane LLC",
    "logo": "Bode-Bayer"
  }, {
    "id": 32,
    "role": "Administrative Officer",
    "lndustry": "Marketing",
    "skill": "LWUIT",
    "city": "Eindhoven",
    "company": "Kirlin Inc",
    "logo": "Feil Inc"
  }, {
    "id": 33,
    "role": "Human Resources Assistant IV",
    "lndustry": "Accounting",
    "skill": "Nutrition",
    "city": "Kotabaru Hilir",
    "company": "Quigley, Kreiger and Bogan",
    "logo": "Tremblay, Cremin and Pfannerstill"
  }, {
    "id": 34,
    "role": "Software Engineer III",
    "lndustry": "Services",
    "skill": "JScript",
    "city": "Ülken",
    "company": "Bayer, Spinka and Adams",
    "logo": "Mayert and Sons"
  }, {
    "id": 35,
    "role": "Occupational Therapist",
    "lndustry": "Training",
    "skill": "BMC Patrol",
    "city": "Yuanyang Zhen",
    "company": "Bahringer-Hirthe",
    "logo": "Hartmann, Bernhard and Ebert"
  }, {
    "id": 36,
    "role": "GIS Technical Architect",
    "lndustry": "Legal",
    "skill": "MW",
    "city": "Banda Layung",
    "company": "Hammes-Block",
    "logo": "Hodkiewicz, Cassin and Dare"
  }, {
    "id": 37,
    "role": "Structural Analysis Engineer",
    "lndustry": "Training",
    "skill": "Electricians",
    "city": "Peteranec",
    "company": "Bahringer, Abshire and Bahringer",
    "logo": "Hoeger Inc"
  }, {
    "id": 38,
    "role": "VP Quality Control",
    "lndustry": "Support",
    "skill": "After Effects",
    "city": "Haishan",
    "company": "Fadel, Abshire and Gerlach",
    "logo": "Reilly-Block"
  }, {
    "id": 39,
    "role": "Payment Adjustment Coordinator",
    "lndustry": "Services",
    "skill": "BSCI",
    "city": "Dayr Mawās",
    "company": "Hane, Jacobson and Brekke",
    "logo": "Lehner and Sons"
  }, {
    "id": 40,
    "role": "Actuary",
    "lndustry": "Engineering",
    "skill": "Small Boat Operations",
    "city": "Šestajovice",
    "company": "Wolff Inc",
    "logo": "Sipes, Fisher and Hoppe"
  }, {
    "id": 41,
    "role": "Human Resources Assistant I",
    "lndustry": "Services",
    "skill": "Twilio",
    "city": "Sa'dah",
    "company": "Lubowitz, Daniel and Swaniawski",
    "logo": "Kreiger, McLaughlin and Howell"
  }, {
    "id": 42,
    "role": "Senior Editor",
    "lndustry": "Training",
    "skill": "Abaqus",
    "city": "Luyi",
    "company": "Ratke, Wintheiser and Kuhlman",
    "logo": "Stokes Group"
  }, {
    "id": 43,
    "role": "Assistant Professor",
    "lndustry": "Sales",
    "skill": "SNOMED",
    "city": "Saint Petersburg",
    "company": "Kozey-Gutkowski",
    "logo": "Torp and Sons"
  }, {
    "id": 44,
    "role": "Programmer Analyst III",
    "lndustry": "Research and Development",
    "skill": "TS",
    "city": "Long’anqiao",
    "company": "Feeney, Adams and Reynolds",
    "logo": "Tromp and Sons"
  }, {
    "id": 45,
    "role": "Sales Associate",
    "lndustry": "Legal",
    "skill": "Americans with Disabilities Act",
    "city": "Kabba",
    "company": "Waelchi Group",
    "logo": "Greenholt-Cartwright"
  }, {
    "id": 46,
    "role": "Systems Administrator III",
    "lndustry": "Training",
    "skill": "Krakatoa",
    "city": "Santa Rosa",
    "company": "Rau, Lehner and Maggio",
    "logo": "Mayer, Bartoletti and Bosco"
  }, {
    "id": 47,
    "role": "Chemical Engineer",
    "lndustry": "Legal",
    "skill": "Aerospace Manufacturing",
    "city": "Blansko",
    "company": "Herman-Hilpert",
    "logo": "Dicki and Sons"
  }, {
    "id": 48,
    "role": "Senior Editor",
    "lndustry": "Accounting",
    "skill": "Options",
    "city": "Yalkhoy-Mokhk",
    "company": "Hilll, Ortiz and Wiegand",
    "logo": "Greenfelder-Treutel"
  }, {
    "id": 49,
    "role": "Geologist I",
    "lndustry": "Human Resources",
    "skill": "RPG Free",
    "city": "Monteros",
    "company": "Conn LLC",
    "logo": "Koss, Blanda and Hirthe"
  }, {
    "id": 50,
    "role": "Statistician IV",
    "lndustry": "Accounting",
    "skill": "VSAM",
    "city": "Namwala",
    "company": "Dickens LLC",
    "logo": "Dooley Group"
  }, {
    "id": 51,
    "role": "Account Representative I",
    "lndustry": "Support",
    "skill": "Snooker",
    "city": "Yanglin",
    "company": "Auer-Durgan",
    "logo": "Cartwright Group"
  }, {
    "id": 52,
    "role": "Civil Engineer",
    "lndustry": "Legal",
    "skill": "Interior Architecture",
    "city": "Pa Kham",
    "company": "Breitenberg-Rempel",
    "logo": "O'Connell and Sons"
  }, {
    "id": 53,
    "role": "Staff Accountant III",
    "lndustry": "Sales",
    "skill": "EFTPOS",
    "city": "Kuantan",
    "company": "Kiehn, Wunsch and Graham",
    "logo": "Thompson and Sons"
  }, {
    "id": 54,
    "role": "Clinical Specialist",
    "lndustry": "Services",
    "skill": "Keyboards",
    "city": "Quivilla",
    "company": "Wuckert, Weimann and Thiel",
    "logo": "Quitzon and Sons"
  }, {
    "id": 55,
    "role": "GIS Technical Architect",
    "lndustry": "Human Resources",
    "skill": "Qt",
    "city": "Salekhard",
    "company": "McClure and Sons",
    "logo": "Corwin, Hudson and Hintz"
  }, {
    "id": 56,
    "role": "Recruiting Manager",
    "lndustry": "Product Management",
    "skill": "Energy",
    "city": "Masantol",
    "company": "Shanahan, Kassulke and Kovacek",
    "logo": "Brekke LLC"
  }, {
    "id": 57,
    "role": "Senior Editor",
    "lndustry": "Sales",
    "skill": "UK Tax",
    "city": "Acas",
    "company": "Smith, McCullough and McKenzie",
    "logo": "Renner LLC"
  }, {
    "id": 58,
    "role": "Biostatistician IV",
    "lndustry": "Business Development",
    "skill": "OAT",
    "city": "Zuoxi",
    "company": "Hudson, Pollich and Welch",
    "logo": "Ferry LLC"
  }, {
    "id": 59,
    "role": "Marketing Manager",
    "lndustry": "Research and Development",
    "skill": "VDM",
    "city": "Krajan Curahcotok",
    "company": "Nienow-Volkman",
    "logo": "Durgan, Satterfield and Kerluke"
  }, {
    "id": 60,
    "role": "Food Chemist",
    "lndustry": "Sales",
    "skill": "Justice",
    "city": "Rodnikovskaya",
    "company": "Walsh-McKenzie",
    "logo": "Schneider-Cronin"
  }, {
    "id": 61,
    "role": "Staff Scientist",
    "lndustry": "Legal",
    "skill": "CVM",
    "city": "Gore",
    "company": "Lockman LLC",
    "logo": "Gislason-Rohan"
  }, {
    "id": 62,
    "role": "Environmental Tech",
    "lndustry": "Support",
    "skill": "Budgets",
    "city": "Cibalung",
    "company": "Swaniawski, Moen and Marquardt",
    "logo": "Walsh and Sons"
  }, {
    "id": 63,
    "role": "Financial Analyst",
    "lndustry": "Training",
    "skill": "PTF",
    "city": "Gornji Petrovci",
    "company": "McDermott, Koss and Brakus",
    "logo": "Bashirian-Torp"
  }, {
    "id": 64,
    "role": "Software Test Engineer I",
    "lndustry": "Training",
    "skill": "Biodiversity",
    "city": "Beaufort",
    "company": "Hamill, Spencer and Cruickshank",
    "logo": "Bechtelar and Sons"
  }, {
    "id": 65,
    "role": "Web Developer II",
    "lndustry": "Support",
    "skill": "Design for Manufacturing",
    "city": "Gnosjö",
    "company": "Kautzer-Padberg",
    "logo": "Funk, Hickle and Smitham"
  }, {
    "id": 66,
    "role": "Administrative Officer",
    "lndustry": "Engineering",
    "skill": "Spring MVC",
    "city": "Forssa",
    "company": "McCullough-Purdy",
    "logo": "McGlynn, Jacobson and Raynor"
  }, {
    "id": 67,
    "role": "Occupational Therapist",
    "lndustry": "Support",
    "skill": "BPD",
    "city": "Tapilon",
    "company": "Wisoky Group",
    "logo": "Bailey-Zemlak"
  }, {
    "id": 68,
    "role": "Research Associate",
    "lndustry": "Engineering",
    "skill": "French",
    "city": "Jiangkou",
    "company": "Waters-Klocko",
    "logo": "Hane, Dooley and Stracke"
  }, {
    "id": 69,
    "role": "Senior Quality Engineer",
    "lndustry": "Services",
    "skill": "Directing Others",
    "city": "San Rafael",
    "company": "Fadel-Runte",
    "logo": "Mohr Inc"
  }, {
    "id": 70,
    "role": "Environmental Specialist",
    "lndustry": "Sales",
    "skill": "CPI",
    "city": "Junín",
    "company": "Schowalter-Muller",
    "logo": "Jacobson and Sons"
  }, {
    "id": 71,
    "role": "Senior Cost Accountant",
    "lndustry": "Research and Development",
    "skill": "Electronics",
    "city": "Rongxiang",
    "company": "Ward, Crooks and Jakubowski",
    "logo": "Ernser Inc"
  }, {
    "id": 72,
    "role": "Structural Analysis Engineer",
    "lndustry": "Services",
    "skill": "OO Software Development",
    "city": "Nanto-shi",
    "company": "Turcotte, Keeling and Moen",
    "logo": "O'Conner, Greenholt and Schaefer"
  }, {
    "id": 73,
    "role": "Assistant Manager",
    "lndustry": "Product Management",
    "skill": "WordPress",
    "city": "Khorugh",
    "company": "Olson LLC",
    "logo": "Lang LLC"
  }, {
    "id": 74,
    "role": "Health Coach IV",
    "lndustry": "Support",
    "skill": "FDCPA",
    "city": "Donghai",
    "company": "Johnston Group",
    "logo": "Cassin and Sons"
  }, {
    "id": 75,
    "role": "Assistant Manager",
    "lndustry": "Engineering",
    "skill": "Middle Office",
    "city": "Dalian",
    "company": "Rath, Swaniawski and Bashirian",
    "logo": "Koepp, Lakin and Kihn"
  }, {
    "id": 76,
    "role": "Data Coordiator",
    "lndustry": "Human Resources",
    "skill": "Xserve",
    "city": "Mozhaysk",
    "company": "Oberbrunner Group",
    "logo": "Hoppe-Quitzon"
  }, {
    "id": 77,
    "role": "Assistant Manager",
    "lndustry": "Accounting",
    "skill": "Financial Accounting",
    "city": "Kruševac",
    "company": "Corwin, Cruickshank and Durgan",
    "logo": "Nolan Group"
  }, {
    "id": 78,
    "role": "Help Desk Operator",
    "lndustry": "Research and Development",
    "skill": "Epigenetics",
    "city": "Longquan",
    "company": "Marvin Group",
    "logo": "Hansen, Cormier and Hettinger"
  }, {
    "id": 79,
    "role": "Analyst Programmer",
    "lndustry": "Accounting",
    "skill": "Networking",
    "city": "Aranas Sur",
    "company": "Emmerich, Grant and Conroy",
    "logo": "Wisozk, Dooley and Morissette"
  }, {
    "id": 80,
    "role": "Data Coordiator",
    "lndustry": "Research and Development",
    "skill": "Workplace Violence",
    "city": "Marogong",
    "company": "Bins, Franecki and Schamberger",
    "logo": "Braun Group"
  }, {
    "id": 81,
    "role": "Database Administrator II",
    "lndustry": "Services",
    "skill": "Asset Allocation",
    "city": "Zhangjiabao",
    "company": "Stehr LLC",
    "logo": "Jerde, Powlowski and Windler"
  }, {
    "id": 82,
    "role": "Geologist I",
    "lndustry": "Support",
    "skill": "Global Health",
    "city": "Fukiage-fujimi",
    "company": "Dickinson-Graham",
    "logo": "Gibson-Effertz"
  }, {
    "id": 83,
    "role": "Civil Engineer",
    "lndustry": "Engineering",
    "skill": "LPS",
    "city": "Vinhedo",
    "company": "Walsh and Sons",
    "logo": "Dicki, Kreiger and Gutmann"
  }, {
    "id": 84,
    "role": "VP Product Management",
    "lndustry": "Marketing",
    "skill": "Vocational Rehabilitation",
    "city": "Kalety",
    "company": "Schaefer and Sons",
    "logo": "Kshlerin, Nikolaus and Pfannerstill"
  }, {
    "id": 85,
    "role": "Safety Technician IV",
    "lndustry": "Accounting",
    "skill": "Animal Work",
    "city": "Citarik",
    "company": "Hayes-Bruen",
    "logo": "Mayer-Bernier"
  }, {
    "id": 86,
    "role": "Web Developer I",
    "lndustry": "Marketing",
    "skill": "AMI",
    "city": "Podhum",
    "company": "Schulist, Dietrich and Eichmann",
    "logo": "Schultz, Koss and Hodkiewicz"
  }, {
    "id": 87,
    "role": "Financial Advisor",
    "lndustry": "Marketing",
    "skill": "SVT",
    "city": "La Romana",
    "company": "Roob, Borer and Stiedemann",
    "logo": "Schuster, Huels and Torphy"
  }, {
    "id": 88,
    "role": "Senior Sales Associate",
    "lndustry": "Support",
    "skill": "UCC filings",
    "city": "Gustavsberg",
    "company": "Casper, Orn and Durgan",
    "logo": "Romaguera Inc"
  }, {
    "id": 89,
    "role": "Chemical Engineer",
    "lndustry": "Training",
    "skill": "Ghost Imaging",
    "city": "Taochuan",
    "company": "Gerlach, Wiegand and Marquardt",
    "logo": "Lindgren Group"
  }, {
    "id": 90,
    "role": "Database Administrator IV",
    "lndustry": "Legal",
    "skill": "Kaizen Blitz",
    "city": "Phong Điền",
    "company": "Parisian LLC",
    "logo": "Lindgren LLC"
  }, {
    "id": 91,
    "role": "Analyst Programmer",
    "lndustry": "Human Resources",
    "skill": "Fashion Photography",
    "city": "Quinta dos Frades",
    "company": "Ankunding, Bogisich and Pfannerstill",
    "logo": "Abernathy, Schaden and Hansen"
  }, {
    "id": 92,
    "role": "Web Developer I",
    "lndustry": "Research and Development",
    "skill": "BTLS",
    "city": "Bacolod",
    "company": "Dickens and Sons",
    "logo": "Herman and Sons"
  }, {
    "id": 93,
    "role": "Chief Design Engineer",
    "lndustry": "Sales",
    "skill": "Post Production",
    "city": "Xuanhua",
    "company": "Schaefer Inc",
    "logo": "Bednar-Hamill"
  }, {
    "id": 94,
    "role": "Systems Administrator I",
    "lndustry": "Sales",
    "skill": "Ideas NX",
    "city": "Guanghai",
    "company": "McLaughlin LLC",
    "logo": "Powlowski LLC"
  }, {
    "id": 95,
    "role": "Information Systems Manager",
    "lndustry": "Engineering",
    "skill": "Mysticism",
    "city": "Anoek",
    "company": "Mosciski, Kessler and Feest",
    "logo": "Emmerich Inc"
  }, {
    "id": 96,
    "role": "Nurse",
    "lndustry": "Business Development",
    "skill": "Broadband",
    "city": "São Martinho de Árvore",
    "company": "Harvey-Borer",
    "logo": "Heller, Gottlieb and Hintz"
  }, {
    "id": 97,
    "role": "Executive Secretary",
    "lndustry": "Training",
    "skill": "Environmental Issues",
    "city": "Coxim",
    "company": "Paucek, Dietrich and Willms",
    "logo": "Gleichner-Jones"
  }, {
    "id": 98,
    "role": "Assistant Manager",
    "lndustry": "Engineering",
    "skill": "LLVM",
    "city": "Chinchaypujio",
    "company": "Larson, Mraz and Rolfson",
    "logo": "Little and Sons"
  }, {
    "id": 99,
    "role": "Safety Technician I",
    "lndustry": "Engineering",
    "skill": "Legislative Affairs",
    "city": "Khasavyurt",
    "company": "Fritsch, Brekke and Reilly",
    "logo": "Kuvalis LLC"
  }, {
    "id": 100,
    "role": "Graphic Designer",
    "lndustry": "Business Development",
    "skill": "IDX",
    "city": "San Juan de Colón",
    "company": "Mosciski, Emmerich and O'Reilly",
    "logo": "Simonis Group"
  }]
  selectedJoblisting =new  BehaviorSubject([]);
  selectedJoblising$ = this.selectedJoblisting.asObservable();
  pageNumber = new BehaviorSubject(0);
  searchFilters = new BehaviorSubject(null);
  serarchFilters$ = this.searchFilters.asObservable();
  pageListingsubject = new BehaviorSubject(null);
  constructor() { }
  filteredListing(filterapplied?:boolean) :Observable<any>{
    this.pageNumber.next(0);
    let jobsListing$ = this.jobsListingList;
   let filtered$ = this.serarchFilters$.pipe(
      withLatestFrom(jobsListing$),
      map(([criteria, listings]) => {
        if(!criteria || criteria.length === 0){
          return listings;
        }
        var result = [];
        return criteria.map(element => { 
            for( var i = 0; i< Object.keys(element).length; i++){
          let k = Object.keys(element)[i]; 
          if (k === "singleCriteria") {let res = [];
             listings.filter((value, idx) => {
              for (const key in value) {
               if((value[key]).toString().toLowerCase().includes(element[k].toLowerCase())){
                 res.push(value)
               }
              }
            });
            result.push(res);
          } else {
            let res = listings.filter((value, idx) => element[k] === value[k]);
            
            if(res.length > 0){
              result.push(res);
            };
           
          }
        }
        
        return result.reduce((acc,curr) => acc.concat(curr),[]);
        });
      
      }),
      map(data => {
        if(Array.isArray(data[0] ) ){
          return data[0];
        } return data;
        }),
      tap(data =>{this.pageListingsubject.next(data) ; console.log(data,'d in'); } )
    )
 if(filterapplied){
  filtered$.subscribe()
 }
 return filtered$
  }
  getNextPage(index) {console.log('cass')
    let listing$ = this.filteredListing();
    let num = (+index + 1) * 7;console.log(num,num-7,'indx')
   let pagelisting$ = listing$.pipe(
      map(data=> data.slice(num-7, num )),
      tap(data => { console.log(data);this.pageListingsubject.next(data)})
    ).subscribe()
    this.pageNumber.next(++index);
  }
  getPreviousPage(index){
    let num = (+index-1) * 7;console.log(num,num-7,'PPindx')
    let listing$ = this.filteredListing();
    let pagelisting$  =listing$.pipe(
      map(data=> data.slice(num -7,num)),
      tap(data => this.pageListingsubject.next(data))
    ).subscribe()
    this.pageNumber.next(--index);
  }
  get pageListing() :Observable<any>{
    return this.pageListingsubject.asObservable()
  }
  get pageNo () :Observable<number>{
    return this.pageNumber.asObservable()
  }

  get jobsListingList() {
    return of(this.jobsListing)
  }
  get selectedJobDetails() {
    return this.selectedJoblising$;
  }
}

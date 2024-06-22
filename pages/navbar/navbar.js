ServicesData =         [["Web Application development" , "sub-servic1" , "sub-service2"],
["Cloud sevices" , "sub-servic1" , "sub-service2" ],
["Infra Management Services" , "sub-servic1" , "sub-service2"],
["Mobile Application Development" , "sub-servic1" , "sub-service2"] ,
["IT Augmentation" , "Custom Product Development" , "sub-servic1" , "sub-service2"] ,
["Testing As A Service" , "sub-servic1" , "sub-service2"] ,
["IT Trainings" , "sub-servic1" , "sub-service2"] ,
["Project Management" , "sub-servic1" , "sub-service2"] ,
["UI/UX Development" , "sub-servic1" , "sub-service2"] ,
["Technology Consulting" , "sub-servic1" , "sub-service2"] ,
["Product Migration & Application Scaling" , "sub-servic1" , "sub-service2"]
] ;
// it is a 2D araay
// each sub array contain service name at 0th index and rest of the other subsection of services on next

productsData=[
    "BizGrow",
    "E-Delivery",
    "Ecom",
    "BMS",
    "GBSITS",
    "UNIMART"
]

industriesData= [
    "E-Governance" ," E-Commerce" , "FMCG" , "Healthcare" , "IT" , "Retail", "Pharma"  , "Realty" , "Education" , "Agricultural" , "Facilities" , "Hospitality" , "Textile" , "Food & Beverages" , "Biotechnology" , "Automobile" , "Insurance" , "Manufacturing" 
]
var navbarDataStr = ` <!-- navbar section 2 -->
<ul class="nav justify-content-end">
    <li class="nav-item">
        <a class="nav-link navbar-sub-slide" aria-current="page" href="#">Insights</a>
    </li>
    <li class="nav-item">
        <a class="nav-link navbar-sub-slide" href="#">News & Press</a>
    </li>
    <li class="nav-item">
        <a class="nav-link navbar-sub-slide" href="#">Careers</a>
    </li>
    <li class="nav-item">
        <a class="nav-link navbar-sub-slide" aria-disabled="true">Contact Us</a>
    </li>
</ul>

<ul style="padding-left: 0px; margin-bottom: 0px;">
    <ul class="nav justify-content-between" style="border-top: solid black 1px; border-bottom: solid black 1px;">
        <div><img src="./../../assets/images/Screenshot 2024-04-13 230138.png" height="45px" alt=""></div>
        <div class="d-flex justify-content-end">


            <li class="nav-item">
                <a class="nav-link navbar-main-slide dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">Industries</a>
                <div class="dropdown-menu" style="width: 53rem; ">
                    <div class="container text-canter">

                        <div class="row ps-5" id="industries-dropdown">
                            <!-- html code is render by js from product Content which is present on mainData.js code -->
                        </div>
                    </div>
                </div>
            </li>


            <li class="nav-item">
                <a class="nav-link navbar-main-slide dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                <div class="dropdown-menu" style="min-width: 60rem; ">
                    <div class="container text-center">

                        <div class="row" id="product-dropdown">
                            <!-- html code is render by js from product Content which is present on mainData.js code -->
                        </div>
                    </div>
                </div>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link navbar-main-slide dropdown-toggle" href="#" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">Services</a>
                <div class="dropdown-menu" style="min-width: 65rem; ">
                    <div class="container text-center ps-4">

                        <div class="row ps-5" id="services-dropdown">
                            <!-- html code is render by js from serviceContent which is present on mainData.js code -->
                        </div>
                    </div>

                </div>

            </li>

            <li class="nav-item">
                <a class="nav-link navbar-main-slide" aria-current="page" href="#">About Us</a>
            </li>

        </div>
    </ul>
</ul>


`
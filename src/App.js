import React from 'react';
//import Child from './components/Child';
//import GrandChild from './components/GrandChild';
import Header from './components/Header';

class App extends React.Component{  //class based component
  render(){
    return (
    <body>
<div id="d1">
<Header></Header>
<div class="nav"><br/>
    <h2>CAREER OBJECTIVE:</h2>
    </div>
<p>I am looking forward to an opportunity <br/>
    where I can utilize my skills in constituting effectively<br/>
     to the success of the organization and further improvement of my personal skills.</p>

<div class="edu">
    <h3>ACADEMIC QUALIFICATION:</h3>
    
</div>
<table class="table_content">
    <thead>
        <tr>
            <th>Course</th>
        <th>Institution</th>
        <th>Board/University</th>
        
        <th>Percentage</th>
        
    </tr>
</thead>
<tbody>
    <tr>
        <td>MCA</td><td>NMAM INSTITUTE
            OF  <br/>TECHNOLOGY Nitte</td>
        <td>VTU University.</td>
        
        <td>8.68CGPA</td>

    </tr>
    <tr class="active-row">
        <td>BCA</td>
            
            <td>Vivekananda Degree<br/> 
                College Puttur</td>
            <td>Mangalore University.</td>

            <td>77.74%</td>
    
        </tr>
        <tr>
                <td>PUC</td><td>St.JoachimsPU<br/> College Kadaba</td>
                <td>Department of Pre-university<br/>
                    Education, Karnataka
                    </td>
        
                <td>71.84%</td>
        
            </tr>
            <tr>
            
                    <td>SSLC</td><td>St.Joachims <br/>High school Kadaba</td>
                    <td>Karnataka Secondary Education<br/>
                        Examination Board
                        
                        </td>
                    
                    <td>71%</td>
            
                </tr>
            
        
        </tbody>

</table>
    <div class="acti">
        <h3>TECHNICAL SKILLS:</h3>
    </div>
        <li><b><u>Programming languages known:</u></b></li>
        <p>Java,C,C++,PHP,SQL,HTML,PYTHON,VB.NET</p>
        <li><b><u>Tools and Platforms known:</u></b></li>
        <p>Windows ,Netbeans ,Visual studio</p>

        <div class="acti1">
        <h3>ACADEMIC PROJECT DETAILS:</h3>
    </div>
<li><b><u>Fuel Station Management:</u></b></li>
        <p><b><u>Tools:</u></b><br/>Front end:VB.NET AND C#<br/>
Backend:MS SQL SERVER</p>
        <li><b><u>Rainfall Data Analysis:</u></b></li>
        <p><b><u>Tools:</u></b>Weka tool</p>

        <div class="work">
            <h4>WORKSHOPS ATTENDED:</h4>
        </div>
        
            <li><i>Workshop on Artificial Intelligence and Design Thinking from  Justice K S Hegde institute of management Nitte.</i></li>
            <li><i>Workshop on Leadership Training from Vivekananda College Puttur.</i></li>
            <li><i>Workshop on Personality Development and Soft skills from Vivekananda College Puttur.</i></li><br/>
   
            <div class="str">
                <h5>STRENGTH:</h5>
            </div>
<ol type="i">
    <li>Adaptability</li>
    <li>Time Management</li>
<li>Team Player</li>
<li>Hard Working</li>
<li>Honest</li>


<li>Adjustable</li>
</ol>
<div class="ppp">
<h6>HOBBIES AND INTERESTS</h6></div>
<ol type="i">
    <li>Yoga</li>
    <li>Travelling</li>
    <li>Watching movies</li>
    <li>Photography</li>
</ol>
<div class="dec">
    <h7>DECLARATION:</h7>
</div>
<p>I hereby declare that all the information that I have provided is true to the best of my knowledge. I will be glad to provide further details, if required.</p>
<br/>

<h8><b>Place:KADABA</b></h8><br/><h9><b>Date:</b></h9>
<p align="right"><b>(SWATHI K S)</b></p>





     </div>
      </body>
      
    
    )
  }
}


//function App()
////{
 // return<h1>MicroDegree</h1>  //function based component
//}

export default App
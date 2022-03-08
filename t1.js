x=0 
t = { "Facultyid": ["", ""], "Degreediploma": "", "Specialisation": "", "Boarduniversity": "", "Percentage": "", "Year": "", "Division": "", "Certificatelink": "", "Subjectcode": ["11", ""], "Subjectname": "111", "Specilisationcategory": "" }

for (var i in t) {
    for (k in t[i]) {
        console.log(t[i][k])
      if(t[i][k]==null) delete t[i][k]  
    }
    
    // console.log(t[i]);
}
console.log(t)
console.log(x)
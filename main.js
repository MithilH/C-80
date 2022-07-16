var student_array=[];

function submit(){
    var display_array=[];

    for( var j=1; j<=4; j++){

        var student_name= document.getElementById("name_of_the_student_"+j).value;
        console.log(student_name);
        student_array.push(student_name);
    }

    var length_student_array=student_array.length;
    console.log(length_student_array);

    for( var k=0; k<length_student_array; k++){

        display_array.push("<h4> Name - "+ student_array[k]+"</h4>");
        console.log(display_array);
    }
    document.getElementById("display_name_with_commas").innerHTML=display_array;

    var remove_commas=display_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;
     
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    student_array.sort();
    console.log(student_array);
    var student_array_sorting=[];

    var length_student_array=student_array.length;
    console.log(length_student_array);

    for( var k=0; k<length_student_array; k++){

        student_array_sorting.push("<h4> Name - "+ student_array[k]+"</h4>");
        console.log( student_array_sorting);
    }
    document.getElementById("display_name_with_commas").innerHTML=student_array_sorting;

    var remove_commas=student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML= remove_commas;
}

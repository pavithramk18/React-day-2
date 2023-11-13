//Component-It is same as that of a function
//Rules:
//1.Component name should always starts with Capital Letter
//2.File name also should starts in capital letter
//Component should always return a html element such as h tag,div tag,,span tag, and so on
//It should return only one element at a time

//Passing Data through Component

//Property=props used as a parameter 

function ComponentDemo(props){
    return <div>
        <p>
            <h1>Hello {props.add} </h1>
            <h3>Hi {props.add}</h3>
        </p>
    </div>
}
export  default ComponentDemo;
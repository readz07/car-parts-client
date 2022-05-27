import React from 'react';

const Blog = () => {
    return (
        <div className='my-12'>
            <h1 className='lg:text-4xl text-2xl text-center font-bold'>ALL Questions and Answers</h1>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 place-items-center gap-2 my-12'>
                <div className="card w-3/4 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-primary">Question 1: How will you improve the performance of a React Application?</h2>
                        <p>Answer: There are few techniques that could make it faster. First, you have to consider taking components. A good UI could help you to skip this problem of taking unncessary components. Beucase a good UI is planned to organize your workflow.
                            Another ways is not to mix two class and functional component. Thought it's my personal opinion. Use custom common hooks for multiple page is another great technique to make it faster.
                        </p>
                        
                    </div>
                </div>
                <div className="card w-3/4 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-primary">Question 2: What are the different ways to manage a state in a React application?</h2>
                        <p>Answer: The first and widely used to manage a state in React is called useState. This feature helps React to compare their virtual DOM with real DOM and it can decide which part has changed. And update faster than any other tecnology.
                            useState provide two things one is a variable which represent the inital value of a state and antoher is function that helps to set the future value.

                            UseEffect is used to fetch data from outside. In addition another built in state mgt is useReduce method. 

                        </p>
                        
                    </div>
                </div>
                <div className="card w-3/4 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-primary">Question 3: How does prototypical inheritance work?</h2>
                        <p>Answer: Prototypical Inheritance is a very interesting features of JS. It reduce the ton of codes for developer like us. You can consider it as forma which can replicate and create tons of object without any hassle. It is used to add several methods and properties of another object. It eliminates the drawbaks fo constructor function.

                        </p>
                        
                    </div>
                </div>
                <div className="card w-3/4 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-primary">Question 4: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <p>Answer: It's so simple we cans use a method to build this kind of searh products application. We could use five different method icludesof, indexof, find, filter last not least regular expression for this app. 
                        {/* const alligatorFacts = [{name:product}, {price:80}, {description:'abc}]; 
                            
                        */}
                        </p>
                        
                    </div>
                </div>
                <div className="card w-3/4 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-primary">Question 5: What is a unit test? Why should write unit tests?</h2>
                        <p>Answer: After each stage of developing an appication unit test is mandatory. Becuase it show us how much the application meet the crieteria. It helps us to maintain quality standard. Over the course of the software development life cycle, unit testing saves your time and money, and helps any developers write better code, more efficiently.
                        </p>
                        
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Blog;
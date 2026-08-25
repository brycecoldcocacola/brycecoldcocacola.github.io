import{j as e}from"./index-B6gbHVdi.js";import{h as t,d as s}from"./docco-DToxUmjN.js";const n={name:"Physical Units in Python: Part 1 - Emulating Python Primitives",date:"Dec 17 2020"},i=`
class MyNumber:
    def __init__(self, value, units=None):
        self._value = value
        self._units = units
`.trim(),r=`
x = MyNumber(5)
print(str(x))  # returns <__main__.MyNumber instance at 0x037B3990>
print(repr(x))  # also returns <__main__.MyNumber instance at 0x037B3990>
`.trim(),o=`
class MyNumber:
    def __init__(self, value, units=None):
        self._value = value
        self._units = units
    def __str__(self):
        return f'my value is {self._value}'
    def __repr__(self):
        return f'my repr is {self._value}'
`.trim(),l=`
x = MyNumber(5)
print(f'here is the string: {x}')  # returns here is the string: my value is 5
print([x])  # returns [my repr is 5]
`.trim(),a=`
class MyNumber:
    def __init__(self, value, units=None):
        self._value = value
        self._units = units
    def __repr__(self):
        if self._units:
            return f'{self._value} {self._units}'
        else:
            return f'{self._value}'
`.trim(),h=`
class MyNumber:
    def __init__(self, value, units=None):
        self._value = value
        self._units = units
    def __repr__(self):
        if self._units:
            return f'{self._value} {self._units}'
        else:
            return f'{self._value}'
    def __add__(self, other):
        if isinstance(other, MyNumber):
            return MyNumber(self._value + other._value, self._units)
        else:
            return MyNumber(self._value + other, self._units)
`.trim(),d=`
x = MyNumber(5, 'seconds')
y = x + 3
print(type(y))  # returns <class '__main__.MyNumber'
print(y)  # returns 8 seconds
`.trim(),c=`
def __radd__(self, other):
    if isinstance(other, MyNumber):
        return MyNumber(self._value + other._value, self._units)
    else:
        return MyNumber(self._value + other, self._units)
`.trim();function f(){return e.jsxs("div",{children:[e.jsx("h3",{children:n.name}),e.jsx("p",{className:"dateText",children:n.date}),e.jsx("p",{children:"One problem that comes up when using computer programming to solve physics problems is handling physical units like distance or time. In this series, we'll look at developing a flexible framework for handling units in Python. Part 1 of this series will take a look at some prerequisite Python knowledge that will be useful when creating something that acts like a primitive Python type."}),e.jsx("h4",{children:'The Python "Dunders"'}),e.jsxs("p",{children:[`Let's frst take a look behind the scenes to understand how Python works. It starts with the magical functions often referred to as "dunders", which is short for double underscore. The most common one Pythonistas see is `,e.jsx("code",{children:"__init__"}),", which is used to instantiate a class. However, Python uses these functions for all sorts of purposes, such as adding or subtracting. Let's make our own class and take a look at manipulating some basic arithmetic. We'll start with a simple class."]}),e.jsx(t,{language:"python",style:s,children:i}),e.jsxs("p",{children:["Note we're using ",e.jsx("code",{children:"self._value"})," instead of ",e.jsx("code",{children:"self.value"}),". In Python, it's convention to prefix private variables with an underscore. We're doing this because we don't want users to access the value directly. Instead, we want this class to ",e.jsx("i",{children:"be"})," the value. For this to happen, let's take a look at two other dunders, ",e.jsx("code",{children:"__str__"})," and ",e.jsx("code",{children:"__repr__"}),"."]}),e.jsx("h4",{children:"The __str__ and __repr__ Dunders"}),e.jsxs("p",{children:[e.jsx("code",{children:"__str__"})," is the dunder method that converts an object into a string. ",e.jsx("code",{children:"__repr__"})," is the dunder method that converts an object into a string representation of the object. The big difference is that ",e.jsx("code",{children:"__repr__"})," is meant to be unambiguous, whereas",e.jsx("code",{children:"__str__"})," is just meant to be human-readable."]}),e.jsx("p",{children:"Let's look at a couple scenarios to understand how these behave. Let's start with our simple class. What happens when we look at the string and repr for this?"}),e.jsx(t,{language:"python",style:s,children:r}),e.jsxs("p",{children:["Note these both return the same thing. This is because the default functionality of ",e.jsx("code",{children:"__str__"})," is to just return the same thing as ",e.jsx("code",{children:"__repr__"}),". This will always be the case unless we override ",e.jsx("code",{children:"__str__"}),". Note the memory address that's returned from ",e.jsx("code",{children:"__repr__"}),". This memory address is unique to this class instance, which makes it unambiguous."]}),e.jsxs("p",{children:["Now let's look at what happens when we override ",e.jsx("code",{children:"__str__"})," and",e.jsx("code",{children:"__repr__"}),". Here's our updated class."]}),e.jsx(t,{language:"python",style:s,children:o}),e.jsx("p",{children:"We should know how our previous tests should go. Let's look at some more complicated scenarios to see how our instance shows up."}),e.jsx(t,{language:"python",style:s,children:l}),e.jsxs("p",{children:["In the first print statement, we're formatting ",e.jsx("code",{children:"x"})," into a string. This will convert it to a string and insert it into the string that is being printed. We can see that it's calling ",e.jsx("code",{children:"__str__"})," in this case."]}),e.jsxs("p",{children:["In the second print statement, we add our instance to a list, then print that list. When we do that, Python shows us what's in that list by calling ",e.jsx("code",{children:"__repr__"})," for each item, since that will tell us, unambiguously, what each item is. We can see it's calling ",e.jsx("code",{children:"__repr__"})," in this case."]}),e.jsxs("p",{children:["In our case, we want it to return the value and the units. If the units are omitted, we'll leave them out and just return the value. We'll use ",e.jsx("code",{children:"__repr__"})," in this case since it's intended to be a numeric type. For now, we'll assume ",e.jsx("code",{children:"value"})," will be a float or int and ",e.jsx("code",{children:"units"})," will be a string. Since neither of these override the default ",e.jsx("code",{children:"__str__"}),", we'll convert them to strings in our ",e.jsx("code",{children:"__repr__"})," to simplify the code. Here's our new class."]}),e.jsx(t,{language:"python",style:s,children:a}),e.jsx("h4",{children:"Dunders for Arithmetic"}),e.jsx("p",{children:"With that out of the way, let's take a look at some more dunders. this time, we'll look at the ones that are used for basic arithmetic. Here's a quick rundown of all the arithmetic dunders and what they're used for."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"__add__(self, other)"})," is for addition (+)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"__sub__(self, other)"})," is for subtraction (-)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"__mul__(self, other)"})," is for multiplication (*)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"__truediv__(self, other)"})," is for division (/)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"__pow__(self, other)"})," is for power (**)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"__lt__(self, other)"})," is for less than (<)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"__le__(self, other)"})," is for less than or equal to (<=)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"__eq__(self, other)"})," is for equal to (==)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"__gt__(self, other)"})," is for greater than (>)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"__ge__(self, other)"})," is for greater than or equal to (>=)"]})]}),e.jsxs("p",{children:["This is just scratching the surface. Check out the ",e.jsx("a",{href:"https://docs.python.org/3/reference/datamodel.html#emulating-numeric-types",children:"Python documentation"})," for more information on emulating data types in Python. For now, we'll stick to these and take a look at them in action. Let's start with addition. We'll account for two use cases."]}),e.jsxs("ol",{children:[e.jsx("li",{children:"Adding a float or an int to our class"}),e.jsxs("li",{children:["Adding another instance of ",e.jsx("code",{children:"MyNumber"})," to our class"]})]}),e.jsxs("p",{children:["Let's now add a ",e.jsx("code",{children:"__add__"})," method to handle this."]}),e.jsx(t,{language:"python",style:s,children:h}),e.jsxs("p",{children:["We're first checking to see if the other thing we're adding is another instance of ",e.jsx("code",{children:"MyNumber"}),". If it is, we'll add the two values together. Down the road, we'll probably want to handle unit compatibility and conversion, but we'll leave it at this for now. If the other object isn't an instance of ",e.jsx("code",{children:"MyNumber"}),", then we'll just add it to our value. In both cases, we leave it to ",e.jsx("code",{children:"self._value"})," to handle the addition. Since the value is an int or float, this will behave just like regular int or float addition. For example, an error will be raised if we try adding a string. Let's see it in action."]}),e.jsx(t,{language:"python",style:s,children:d}),e.jsxs("p",{children:["Great! We see it returns an instance of ",e.jsx("code",{children:"MyNumber"})," with the value of 8 and units of seconds."]}),e.jsxs("p",{children:["Note that we get an error if we try ",e.jsx("code",{children:"y = 3 + x"}),". This is because there's another dunder called ",e.jsx("code",{children:"__radd__"})," that handles the case where our object is on the right side of the addition. Note that ",e.jsx("code",{children:"__radd__"})," is only called when the object on the left either doesn't have its own ",e.jsx("code",{children:"__add__"})," method or it doesn't know how to add the two objects together. We can add an ",e.jsx("code",{children:"__radd__"})," method to our class to handle this case. It would look just like our ",e.jsx("code",{children:"__add__"})," method."]}),e.jsx(t,{language:"python",style:s,children:c}),e.jsx("p",{children:"That's where we'll stop for now. I encourage you to test out the other dunders and get a feel for how other arithmetic is handled. In the next post, we'll take a look at handling units. Until then, happy coding!"})]})}export{f as default};

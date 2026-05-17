<h1> Investment Calculator </h1>

**Description: An investment calculator that displays the below fields on basis of certain inputs, taken from the calculator popped up on the screen.**
1. Year
2. Investment Value
3. Interest(Year)
4. Total Interest
5. Invested Capital

**Investment Calculator logic**

 * total interest earned across all the years - 
 * annualData = [{},{},{},{}...]
 * initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment
 * totalInterest = (data.valueEndOfYear - data.annualInvestment * data.year) - initialInvestment
 * totalAmountInvested = data.valueEndOfYear - totalInterest

** Investment Calculator**

 1. when duration is zero - its display message to enter a value greater than zero
<img width="968" height="663" alt="image" src="https://github.com/user-attachments/assets/bb0eb277-67b4-4480-bd76-c10ac7b982b1" />

 2. when all the values are valid
<img width="1000" height="730" alt="image" src="https://github.com/user-attachments/assets/c4b8461f-60ac-4aeb-a192-a35bc288b5ae" />

<h2>** Demo - Codesandbox**</h2>
 url:

<h2>**Development**</h2>

To get a local copy of the code, clone it using git:
```
git clone https://github.com/CaptUltron/Investment-Calculator.git
cd Investment-Calculator
```

Install dependencies:
```
npm install
```

Now, you can start a local web server by running:
```
npm run dev
```

<p>and then you can open http://localhost:5173 to view it in the browser.</p>

 

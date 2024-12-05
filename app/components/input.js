import React, { useState } from 'react';

const Page = () => {
  const [numEmployees, setNumEmployees] = useState(50);
  const [annualRevenue, setAnnualRevenue] = useState(1264444);
  const [avgEmployeeSalary, setAvgEmployeeSalary] = useState(52011);

  const calculateROI = () => {
    const costSavingPerEmployee = 925;
    const totalCostSaving = costSavingPerEmployee * numEmployees;

    return {
      costSavingPerEmployee,
      totalCostSaving,
    };
  };

  const { costSavingPerEmployee, totalCostSaving } = calculateROI();

  return (
    <div>
      <h1>Calculate ROI</h1>
      <p>
        Firms Using Carbon Save, On Average, #23,130 Per Employee, Per
        Year.Find Out What You Return On Investment Could Be
      </p>
      <div>
        <label htmlFor="numEmployees">No Of Employees</label>
        <input
          id="numEmployees"
          type="number"
          value={numEmployees}
          onChange={(e) => setNumEmployees(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="annualRevenue">Annual Business Revenue</label>
        <input
          id="annualRevenue"
          type="number"
          value={annualRevenue}
          onChange={(e) => setAnnualRevenue(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="avgEmployeeSalary">Average Employee Salary</label>
        <input
          id="avgEmployeeSalary"
          type="number"
          value={avgEmployeeSalary}
          onChange={(e) => setAvgEmployeeSalary(e.target.value)}
        />
      </div>
      <div>
        <h2>Cost Saving Per Employee</h2>
        <p>{costSavingPerEmployee}</p>
      </div>
      <div>
        <h2>Cost Saving For Your Business</h2>
        <p>{totalCostSaving}</p>
      </div>
    </div>
  );
};

export default Page;
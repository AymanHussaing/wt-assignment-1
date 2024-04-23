import React from 'react';
import './styles/Placement.css'
const Placements = () => {
  return (
    <div className="wrap">
      <div className="college-name">
        <h2 className="college">Chaitanya Bharathi institute of Technology (Autonomou), Hyderabad</h2>
        <div className="sessions">
          <button className="session-btn">2023-24</button>
          <button className="session-btn">2022-23</button>
          <button className="session-btn">2021-22</button>
          <button className="session-btn">2020-21</button>
          <button className="session-btn">2019-20</button>
        </div>
      </div>
      <table className="first-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Details</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>No of students with 1 offer(s)</td>
            <td>211</td>
          </tr>
          <tr>
            <td>1</td>
            <td>No of students with 1 offer(s)</td>
            <td>211</td>
          </tr>
          <tr>
            <td>1</td>
            <td>No of students with 1 offer(s)</td>
            <td>211</td>
          </tr>
          <tr>
            <td>1</td>
            <td>No of students with 1 offer(s)</td>
            <td>211</td>
          </tr>
          <tr>
            <td>1</td>
            <td>No of students with 1 offer(s)</td>
            <td>211</td>
          </tr>
          <tr>
            <td>1</td>
            <td>No of students with 1 offer(s)</td>
            <td>211</td>
          </tr>
          <tr>
            <td>1</td>
            <td>No of students with 1 offer(s)</td>
            <td>211</td>
          </tr>
          <tr>
            <td colSpan="2">Net Selections</td>
            <td>980</td>
          </tr>
          <tr>
            <td colSpan="2">%Selections</td>
            <td>85%</td>
          </tr>
        </tbody>
      </table>
      <h2>Average Pay Package</h2>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Branch</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>CSE</td>
            <td>9.65 LPA</td>
          </tr>
          <tr>
            <td>1</td>
            <td>CSE</td>
            <td>9.65 LPA</td>
          </tr>
          <tr>
            <td>1</td>
            <td>CSE</td>
            <td>9.65 LPA</td>
          </tr>
          <tr>
            <td>1</td>
            <td>CSE</td>
            <td>9.65 LPA</td>
          </tr>
          <tr>
            <td>1</td>
            <td>CSE</td>
            <td>9.65 LPA</td>
          </tr>
          <tr>
            <td>1</td>
            <td>CSE</td>
            <td>9.65 LPA</td>
          </tr>
          <tr>
            <td colSpan="2">Overall Average Pay Package</td>
            <td>8.13</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Placements;

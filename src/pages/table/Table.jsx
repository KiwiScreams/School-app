import "./Table.css";
const Table = () => {
  return (
    <>
      <div className="table">
        <table>
          <caption>ცხრილი 2024 წელი</caption>
          <tr className="caption">
            <th>ორშაბათი</th>
            <th>სამშაბათი</th>
            <th>ოთხშაბათი</th>
            <th>ხუთშაბათი</th>
            <th>პარასკევი</th>
            <th>შაბათი</th>
            <th>კვირა</th>
            <th>დრო</th>
            <th>___</th>
          </tr>
          <tr className="more">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>11:10-11:45</td>
            <td>35 წთ</td>
          </tr>

          <tr className="more">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>მათემატიკა</td>
            <td>მათემატიკა</td>
            <td>13:00-16:00</td>
            <td>35 წთ</td>
          </tr>
          <tr className="more">
            <td>ბიოლოგია</td>
            <td>ქართული</td>
            <td>ფიზიკა</td>
            <td>ფიზიკა</td>
            <td>ქართული</td>
            <td></td>
            <td></td>
            <td>11:50-12:25</td>
            <td>35 წთ</td>
          </tr>
          <tr className="more">
            <td>ქართული</td>
            <td>ინგლისური</td>
            <td>მოქალაქეობა</td>
            <td>ინგლისური</td>
            <td>გეოგრაფია</td>
            <td></td>
            <td></td>
            <td>12:30-13:05</td>
            <td>35 წთ</td>
          </tr>
          <tr className="more">
            <td>ქიმია</td>
            <td>მათემატიკა</td>
            <td>მათემატიკა</td>
            <td>ისტორია</td>
            <td>სპორტი</td>
            <td></td>
            <td></td>
            <td>13:10-13:45</td>
            <td>35 წთ</td>
          </tr>
          <tr className="more">
            <td>ისტორია</td>
            <td>რუსული</td>
            <td>ქიმია</td>
            <td>მათემატიკა</td>
            <td>მათემატიკა</td>
            <td></td>
            <td></td>
            <td>13:50-14:25</td>
            <td>35 წთ</td>
          </tr>
          <tr className="more">
            <td>ქართული</td>
            <td>ისტორია</td>
            <td>ქართული</td>
            <td>რუსული</td>
            <td>ბიოლოგია</td>
            <td></td>
            <td></td>
            <td>14:30-15:05</td>
            <td>35 წთ</td>
          </tr>
          <tr className="more">
            <td>გეოგრაფია</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>15:10-15:45</td>
            <td>35 წთ</td>
          </tr>
          <tr className="more">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>15:00-17:00</td>
            <td>2 სთ</td>
          </tr>
          <tr className="more">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="error">19:00-21:00</td>
            <td>2 სთ</td>
          </tr>
          <tr className="more">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>20:00-21:00</td>
            <td>2 სთ</td>
          </tr>
          <tr className="more">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className="error">20:00-22:00</td>
            <td>2 სთ</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Table;
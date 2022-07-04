
const MonthSelector = ({month}) => {
  return( <select className="month-selector">
    <option>January{month}</option>
    <option>February{month}</option>
    <option>March{month}</option>
    <option>April{month}</option>
    <option>May{month}</option>
    <option>June{month}</option>
    <option>July{month}</option>
    <option>August{month}</option>
    <option>September{month}</option>
    <option>October{month}</option>
    <option>November{month}</option>
    <option>December{month}</option>
  </select>
  )
}

export default MonthSelector;
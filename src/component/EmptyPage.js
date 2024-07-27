import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <>
      <h2>Wrong access</h2>
      <Link to="/">Return</Link>
    </>
  );
}

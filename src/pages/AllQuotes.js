import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  { id: "q1", author: "Daryl", text: "Learning React is Something" },
  { id: "q2", author: "Dave", text: "Stuff" },
  { id: "q3", author: "Denis", text: "Things" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;

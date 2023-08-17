import React from 'react';

interface ResultProps {
  result: string;
}

const Result: React.FC<ResultProps> = ({ result }) => {
  return <p>{result}</p>;
};

export default Result;
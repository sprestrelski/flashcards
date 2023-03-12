import './App.css';
import { useState } from 'react';

const App = () => {
  const [cards, setCards] = useState([
    {
      id: 0,
      ques: "What is the runtime of breadth first search (BFS)?",
      ans: "O(V+E)",
      type: "runtime",
      hasImage: true,
      image: "/BFS.PNG"
    },
    {
      id: 1,
      ques: "What is the runtime of depth first search (DFS)?",
      ans: "O(V+E)",
      type: "runtime",
      hasImage: true,
      image: "/DFS.PNG",
    },
    {
      id: 2,
      ques: "What is the proof outline for correctness of divide and conquer algorithms?",
      ans: "We can prove correctness by induction on problem size.\nBase Case: non recursive case.\nInductive step: assuming the smaller recursive calls are correct, show that the algorithm works",
      type: "proof",
      hasImage: false,
    },
    {
      id: 3,
      ques: "What is the general algorithm technique for divide and conquer algorithms?",
      ans: "1. Break problem into pieces\n2. Solve pieces recursively\n3. Recombine pieces to get answer",
      type: "algorithm",
      hasImage: true,
      image: "/DCMergeSort.PNG",
    },
    {
      id: 4,
      ques: "What is the general algorithm technique for greedy algorithms?",
      ans: "1. Find decision criterion\n2. Make best choice according to criterion\n3. Repeat until done",
      type: "algorithm",
      hasImage: false,
    },
    {
      id: 5,
      ques: "What is the proof outline for greedy algorithms? Hint: Exchange argument",
      ans: "A greedy algorithm makes a sequence of decisions D_1, D_2,... D_n to eventually reach solution G. Need to show that for arbitrary solutions A that G >= A to prove optimality. Inductively construct this sequence.",
      type: "proof",
      hasImage: false,
    },
    {
      id: 6,
      ques: "What techniques can be used to construct minimum spanning trees?",
      ans: "Kruskals: When more than one vertex, add lightest edge and merge. Most efficient algorithm uses union finds.\nPrims: Add lightest edge that connects v to a new vertex.",
      type: "algorithm",
      hasImage: false,
    },
    {
      id: 7,
      ques: "What are the runtimes of Kruskal's and Prim's algorithms?",
      ans: "Kruskal's: O(|E|log|E|)\nPrims: O(|V|log|V| + |E|)",
      type: "runtime",
      hasImage: false,
    },
    {
      id: 8,
      ques: "What is the general algorithm technique for dynamic programming?",
      ans: "1. Break problem into smaller subproblems\n2. Find a recursive formula solving one subproblem in terms of simpler ones\n3. Tabulate answers and solve all subproblems\n",
      type: "algorithm",
      hasImage: true,
      image: "/DPKnapsackExample.PNG",
    },
    {
      id: 9,
      ques: "What is the proof outline for dynamic programming?",
      ans: "Prove by induction that each table entry is filled out correctly. Use base-case and recursion. The runtime is usually [number of subproblems] x [time per subproblem]",
      type: "proof",
      hasImage: false,
    }
  ]);


  const [cardText, setText] = useState(cards[0]);
  const [cardAnswer, setAnswer] = useState(false);
  const [cardID, setID] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const clickCard = () => {
    setAnswer(!cardAnswer);
  }

  const prevCard = () => {
    if (cardID == 1) {
      setPrevDisabled(true);
    }
    if (cardID > 0) {
      setID(cardID - 1);
      setText(cards[cardID-1]);
      setAnswer(false);
      setNextDisabled(false);
    } 
    
  }

  const nextCard = () => {
    //const randInt = Math.floor(Math.random() * cards.length);
    if (cardID == cards.length - 1) {
      setNextDisabled(true);
    }
    if (cardID < cards.length - 1) {
      setID(cardID + 1);
      setText(cards[cardID+1]);
      setAnswer(false);
      setPrevDisabled(false);
    }
  }
 
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const shuffleCards = () => {
    let currentIndex = cards.length, randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex], cards[currentIndex]];
    }
    setCards(cards);
    setText(cards[0]);
    setID(0);
    setAnswer(false);
    setPrevDisabled(true);
    setNextDisabled(false);
  }

  return (
    <div className="App">
      <div className="header">
        <h1>algorithms flashcards</h1>
        <p>how well do you know algorithms? what about their runtime? test your knowledge here!</p>
        <p>total number of cards: {cards.length - cardID}</p>
      </div>
      <div className="container">
        <div className="card" onClick={clickCard} id={cardText.type}>
        <p>{cardAnswer ? cardText.ans : cardText.ques}</p>
        </div>
      </div>

      <div className="container">
      {cardText.hasImage && cardAnswer && 
          <img src={cardText.image} width="450px"/>
      }
      </div>
      <div className="container">
        <button class="prev-button" onClick={prevCard} disabled={prevDisabled}>back</button>
        <button class="next-button" onClick={nextCard} disabled={nextDisabled}>next</button>
        <button onClick={shuffleCards}>shuffle</button>
      </div>
    </div>
  )
}

export default App


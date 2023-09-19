export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrew id")) {
    return "tjeffrey"
  } else if (query.toLowerCase().includes("what is your name?")) {
    return "Tyrece"
  } else if (query.toLowerCase().includes("plus")) {
    const addMatch = query.match(/What is (\d+) plus (\d+)/);
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x+y).toString();
    }
    
  } else if (query.toLowerCase().includes("largest:")) {
    const addMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)?/);
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      const z: number = parseInt(addMatch[3]);
      return (Math.max(x, Math.max(y, z))).toString();
    }
  } else if (query.toLowerCase().includes("multiplied")) {
    const addMatch = query.match(/What is (\d+) multiplied by (\d+)?/);
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      return (x*y).toString();
    }
  }

  return "";
}

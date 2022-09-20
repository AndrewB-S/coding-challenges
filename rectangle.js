//https://www.codewars.com/kata/565f5825379664a26b00007c

function getSize(width, height, depth) {
    return [(2 * (width*height + depth*height + width*depth)) ,(width * height * depth)]
  }
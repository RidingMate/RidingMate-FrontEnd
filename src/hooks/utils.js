// 년, 월 option 리스트 만들 때 사용하려고 만든 util 함수입니다.
// 저는 아래와 같이 사용했습니다.
// ex.
// <Select>
// {makeRangeList(1990, date.getFullYear()).map((data, idx) => (
//   <option key={idx}>{data}년</option>
// ))}
// </Select>

export function makeRangeList(start, end, diff = 1, reverse = false) {
  const list = []
  if (reverse) {
    for (let i = end; i >= start; i -= diff) {
      list.push(i)
    }
  } else {
    for (let i = start; i <= end; i += diff) {
      list.push(i)
    }
  }
  return list
}

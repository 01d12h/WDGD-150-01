window.onload = function() {
  // Personalized Greeting Input
  let nameInput = document.getElementById("nameInput");
  let displayName = document.getElementById("displayName");
  let introText = document.getElementById("introduction");

  nameInput.addEventListener("input", function() { 
            //addEventListener(); : 이벤트(예: input, click) 발생 시 함수 실행,  input 필드에 값이 입력될 때까지 기다린다
            //_________.addEventListener("이벤트타입", 함수);
            //이벤트 타입 예시 : "click", "input", "mouseover", "keydown"(키보드 입력) 등.
    if (nameInput.value.trim() !== "") { //먄약 이름 입력되면,, (공백 제외 - trim)
      displayName.textContent = nameInput.value; //HTML 요소의 텍스트 내용을 nameionput의 값으로 변경
      introText.textContent = "This is " + nameInput.value + "'s Instagram, enjoy!";
    } else { //이름이 입력되지 않으면 기본값값
      displayName.textContent = "My Name"; 
      introText.textContent = "This is my Instagram, enjoy!";
    }
  });

  // Text Color Change Timer
  let colors = ["#FFB6C1", "#FFDAB9", "#E6E6FA", "#C1E1C1", "#F0E68C", "#ADD8E6", "#FFDEAD"];
  let colorIndex = 0;
  introText.style.color = colors[colorIndex]; /*페이지 열리자마자 색상 변경*/
  setInterval(function() {
    colorIndex = (colorIndex + 1) % colors.length; /*배열의 끝(7)에 도달했을 때 0부터 시작하려고 나눗셈 나머지 연산자 사용*/
  }, 30000);

  // Element Movement Across Screen
  let postContainer = document.getElementById("postContainer");//document.getElementById(); : HTML에서 id로 요소를 가져옴
  function movePosts() {
    let posts = Array.from(postContainer.children);  // Array.from(); 게시물 배열로 변환 //____.children : HTML에서 postContainer 의 자식들을 가져옴
    postContainer.appendChild(posts[0]);  // 첫 번째 게시물(인덱스 0)을 맨 뒤로 이동 //appendChild(); : 요소를 부모 요소의 마지막 자식으로 추가
  }
  setInterval(movePosts, 3000);
};
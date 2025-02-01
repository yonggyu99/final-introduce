function changeContent(section) {
    const textContainer = document.getElementById('text-container');
    const imageContainer = document.getElementById('image-container');
    const textContent = document.getElementById('text-content');
    const profilePic = document.getElementById('profile-pic');
    const additionalPic = document.getElementById('additional-pic')

    textContent.style.opacity = '0';
    textContent.style.visibility = 'hidden';
    imageContainer.style.transition = 'left 0.5s ease-in-out'; // 부드러운 이동 효과
    textContainer.style.transition = 'margin-left 0.5s ease-in-out'; // 부드러운 이동 효과
     additionalPic.style.display = 'none'


    setTimeout(() => {
        if (section === 'home') {
            profilePic.src = 'images/profile.jpg';
            profilePic.style.borderRadius ="50%"
            textContent.style.visibility = 'hidden';
            imageContainer.style.left = '50%';
        } 
        
        else if (section === 'about') {
            profilePic.src = 'images/mbti.jpg';
            profilePic.style.borderRadius ="0%"
            textContent.innerHTML = `<p><b>이름</b> : 박용규</p> 
            <p><b>나이</b> : 27살</p>
            <p><b>사는 곳</b> : 부산</p>
            <p><b>전공</b> : 전자공학과</p>
            <p><b>Mbti</b> : Estp</p>
            <p><b>좋아하는 음식</b> : 파프리카, 견과류 빼고 다</p>
            <p><b>싫어하는 음식</b> : 파프리카, 견과류</p>`;
            imageContainer.style.left = '30%';
            textContainer.style.marginLeft = '40%';
            textContent.style.visibility = "visible";
            textContent.style.opacity = '1';
        } 
        
        else if (section === 'like') {
            profilePic.src = 'images/dance-1.jpg';
            profilePic.style.borderRadius ="50%"
            additionalPic.src = 'images/dance-2.jpg'; // 새 이미지 경로 설정
            additionalPic.style.display = 'block'; // 새 이미지 표시
            additionalPic.style.opacity = '1';
            `<p><b>취미</b><br> 취미로 춤을 (시간이 없어서 나중에 취업하고 이어나갈려구요..)</p>
            <p><b>좋았던 경험</b> : 휴학을 하고 가을에 도쿄를 다녀왔는데 너무 좋더라구요 ! 추천합니다 !`;
            imageContainer.style.left = '20%';
            textContainer.style.marginLeft = '40%';
            textContent.style.visibility = "visible";
            textContent.style.opacity = '1';
        } 
        
        else if (section === 'plan') {
            profilePic.src = 'images/plan.jpg';
            textContent.innerHTML = 
            `<p>유레카 무사히 수료하기!</p>
            <p>유레카 무사히 수료하기!</p>`;
            profilePic.style.borderRadius ="0%"
            imageContainer.style.left = '40%';
            textContainer.style.marginLeft = '40%';
            textContent.style.visibility = "visible";
            textContent.style.opacity = '1';
        }
    }, 500);
}
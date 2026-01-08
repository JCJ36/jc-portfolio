import './container.css';

function Home(){
    return(
        <div class="transition-all duration-500">
            <p>Hello World! My name is</p>
            <h1>John Carlo Jancorda</h1>
            <div id="keyinfo" class="gap-2 flex">
                <p class="pill-border">Student</p>
                <p class="pill-border">Computer Science</p>
                <p class="pill-border">Flexible</p>
            </div>
            <br />
            <p>
                My name is <b>John Carlo Jancorda</b>, a 2nd year student for Asia Pacific College, for a Bachelor of Science in 
                Computer Science. <br /> <br />

                Being raised in a generation where software was rapidly evolving that the same application over several years 
                don't look like the same software, I am inspired by these to be a part of this future.
                
                My passion lies within the improving the small inconveniences that plague the software that we use. 
                I use and learn whatever is needed of me to achieve whatever goal I am expected to achieve or to improve.
            </p>
        </div>
    );
}

export default Home;
import React from "react";
import {Link,Outlet,} from "react-router-dom";
import './container.css';

function Container(){
    return (
    <div class="fixed top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500">
        <div class="w-200 h-125 p-6 bg-white rounded-2xl shadow-2xl outline-3 outline-solid">
            <Outlet />
        </div>

        <div class="w-200 h-20 flex justify-center bg-white rounded-2xl shadow-2xl outline-2 outline-solid my-7">
            <nav class="w-full flex items-center justify-between ml-12 mr-12">
                <Link to="/home" className="text-black hover:text-blue-300 transition-colors duration-200" title="Home">
                    <svg width="40px" height="40px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="currentColor"/>
                    </svg>
                </Link>
                <Link to="/home/skills" className="text-black hover:text-blue-300 transition-colors duration-200" title="Skills">
                    <svg width="40px" height="40px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z"/>
                    </svg>
                </Link>
                <Link to="/home/certifications" className="text-black hover:text-blue-300 transition-colors duration-200" title="Certifications">
                    <svg width="40px" height="40px" viewBox="-0.5 0 25 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 10.32C22 9.25914 21.5786 8.24172 20.8284 7.49158C20.0783 6.74143 19.0609 6.32001 18 6.32001H6C4.93913 6.32001 3.92178 6.74143 3.17163 7.49158C2.42149 8.24172 2 9.25914 2 10.32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 10.32C15.91 16.32 8.09 16.32 2 10.32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.9999 10.32L20.9999 18.32C20.8507 19.4088 20.3192 20.4089 19.5002 21.1417C18.6813 21.8745 17.6285 22.2922 16.5299 22.32H7.38989C6.29132 22.2922 5.23847 21.8745 4.41956 21.1417C3.60064 20.4089 3.0691 19.4088 2.91992 18.32L1.91992 10.32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.00977 6.03998C8.00977 4.97911 8.43119 3.96169 9.18134 3.21155C9.93148 2.4614 10.9489 2.03998 12.0098 2.03998C13.0706 2.03998 14.0881 2.4614 14.8382 3.21155C15.5883 3.96169 16.0098 4.97911 16.0098 6.03998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
                <Link to="/home/knowme" className="text-black hover:text-blue-300 transition-colors duration-200" title="Know Me">
                <svg width="40px" height="40px" viewBox="0 0 1024 1024" fill="currentColor" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M512 0C229.611606 0 0 229.611606 0 512s229.611606 512 512 512 512-229.611606 512-512S794.258081 0 512 0z m309.102571 815.890048c-9.773479-52.776788-32.83889-102.686689-67.502164-144.386867a38.937541 38.937541 0 0 0-54.99211-4.951896 38.937541 38.937541 0 0 0-4.951896 54.99211c35.184525 42.351743 54.601171 95.91041 54.601171 151.032833 0 0.912191 0.260626 1.824383 0.260626 2.736574-68.023416 44.436752-149.20845 70.369051-236.518198 70.369051s-168.364469-25.932298-236.518198-70.369051c0-0.912191 0.260626-1.69407 0.260626-2.736574 0-130.182744 105.944515-236.257572 236.257572-236.257572 121.712395 0 220.750318-99.037923 220.750318-220.750318s-99.037923-220.750318-220.750318-220.750318-220.750318 99.037923-220.750318 220.750318c0 70.499364 33.229829 133.179944 84.8338 173.576992-89.003818 42.872996-154.811911 126.533978-173.186053 226.614405C125.7521 737.571901 78.187834 630.193942 78.187834 512 78.187834 272.745228 272.745228 78.187834 512 78.187834s433.812166 194.557394 433.812166 433.812166c-0.130313 118.193942-47.694579 225.571901-124.709595 303.890048zM369.307203 415.698651c0-78.578773 63.983711-142.562484 142.562484-142.562484s142.562484 63.983711 142.562484 142.562484c0 78.709086-63.983711 142.562484-142.562484 142.562484S369.307203 494.277424 369.307203 415.698651z" />
                </svg>
                </Link>
                <Link to="/home/contact" className="text-black hover:text-blue-300 transition-colors duration-200" title="Contact">
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="currentColor"/>
                    </svg>
                </Link>
                <Link to="/" className="text-black hover:text-blue-300 transition-colors duration-200" title="Back to Landing">
                    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 7.63636L14 4.5C14 4.22386 13.7761 4 13.5 4L4.5 4C4.22386 4 4 4.22386 4 4.5L4 19.5C4 19.7761 4.22386 20 4.5 20L13.5 20C13.7761 20 14 19.7761 14 19.5L14 16.3636" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 12L21 12M21 12L18.0004 8.5M21 12L18 15.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Link>
            </nav>
        </div>
    </div>
    );
}

export default Container;
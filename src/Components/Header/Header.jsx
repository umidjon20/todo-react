import { Component } from "react";


export class Header extends Component{
    state = {
        active:true
      }
      
      
      
      showMode =() =>{
       let light = document.querySelector('.light')
       let dark = document.querySelector('.dark')
      
      this.setState((prewState)=>{
        return {
          dark:dark.style.display = 'flex',
          light:light.style.display = 'none',
        //   active:prewState.active = fals
        }
      })
      }
      
      hideMode =() =>{
       let light = document.querySelector('.light')
       let dark = document.querySelector('.dark')
      
        this.setState((prewState)=>{
          return {
            light:light.style.display = 'block',
            dark:dark.style.display = 'none',
            // active:prewState.active = false
          }
        })
        }

    render(){
        const {active} = this.state
        console.log(active);
        return(
            <header>
            <div className="logo">TODO</div>
              <div className="mode">
                <div className="light"
                 onClick={active?this.showMode:this.hideMode}
                 >
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3717 0.215831C10.5931 1.19962 7 5.4302 7 10.5C7 16.299 11.701 21 17.5 21C20.4958 21 23.1986 19.7454 25.1116 17.7328C23.2191 22.5722 18.5098 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C13.81 0 14.6027 0.0740788 15.3717 0.215831Z" fill="white"/>
                  </svg>
                </div>
                <div className="dark" 
                onClick={active?this.hideMode:this.showMode}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C12 0.447715 12.4477 0 13 0C13.5523 0 14 0.447715 14 1V4C14 4.55228 13.5523 5 13 5C12.4477 5 12 4.55228 12 4V1ZM18 13C18 15.7614 15.7614 18 13 18C10.2386 18 8 15.7614 8 13C8 10.2386 10.2386 8 13 8C15.7614 8 18 10.2386 18 13ZM13 21C12.4477 21 12 21.4477 12 22V25C12 25.5523 12.4477 26 13 26C13.5523 26 14 25.5523 14 25V22C14 21.4477 13.5523 21 13 21ZM25 12C25.5523 12 26 12.4477 26 13C26 13.5523 25.5523 14 25 14H22C21.4477 14 21 13.5523 21 13C21 12.4477 21.4477 12 22 12H25ZM5 13C5 12.4477 4.55228 12 4 12H1C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H4C4.55228 14 5 13.5523 5 13ZM20.7782 3.80761C21.1687 3.41709 21.8019 3.41709 22.1924 3.80761C22.5829 4.19814 22.5829 4.8313 22.1924 5.22183L20.0711 7.34315C19.6805 7.73367 19.0474 7.73367 18.6569 7.34315C18.2663 6.95262 18.2663 6.31946 18.6569 5.92893L20.7782 3.80761ZM7.34315 18.6569C6.95262 18.2663 6.31946 18.2663 5.92893 18.6569L3.80761 20.7782C3.41709 21.1687 3.41709 21.8019 3.80761 22.1924C4.19814 22.5829 4.8313 22.5829 5.22183 22.1924L7.34315 20.0711C7.73367 19.6805 7.73367 19.0474 7.34315 18.6569ZM22.1924 20.7782C22.5829 21.1687 22.5829 21.8019 22.1924 22.1924C21.8019 22.5829 21.1687 22.5829 20.7782 22.1924L18.6569 20.0711C18.2663 19.6805 18.2663 19.0474 18.6569 18.6569C19.0474 18.2663 19.6805 18.2663 20.0711 18.6569L22.1924 20.7782ZM7.34315 7.34315C7.73367 6.95262 7.73367 6.31946 7.34315 5.92893L5.22183 3.80761C4.8313 3.41709 4.19814 3.41709 3.80761 3.80761C3.41709 4.19814 3.41709 4.8313 3.80761 5.22183L5.92893 7.34315C6.31946 7.73367 6.95262 7.73367 7.34315 7.34315Z" fill="white"/>
                  </svg>
                </div>
              </div>
          </header>
        )
    }
}
class Tabs {
  constructor(element) {
    this.element = element
    this.tablink = new TabLink(this.element)
    // console.log(this.element);
    
    // might need to be this.tablink
    this.parent = this.element.parentNode
      
    this.current = this.parent.querySelector('.tabs-link-selected')

    // call deselect from here.
    this.element.addEventListener('click', () => this.deselect()) 
  
  }

  deselect() {
    let parent = this.element.parentNode  
    
    // element.target
    
    // console.log(this.current);
    
    let twoSelected = parent.querySelectorAll('.tabs-link-selected')
    
    this.tablink.deselect(twoSelected)
  }
}

class TabLink {
  constructor(element) {
    
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;    
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement)
    // console.log(this.tabItem);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select()) 
    // this.element.addEventListener('click', () => this.deselect()) 
  };

  select() {
    
    // Get all of the elements with the tabs-link class
    // document.querySelectorAll('.tabs-link')

    // // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // .forEach(link => link.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    // console.log(this.element);
    
    
    // Call the select method on the item associated with this link
    this.tabItem.select()
    // this.tabItem.deselect()
  }
  deselect(twoSelected) {
    
    // if (!current.classList.contains('tabs-link-selected')) {
      // if (current !== event.target) {
      //   current.classList.remove('tabs-link-selected');

      // }
      twoSelected.forEach(selected => {
        if (selected !== event.target) {
          selected.classList.remove('tabs-link-selected');
        }
      })   
  }

}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element
  }

  select() {
    
    // Select all ".tabs-item" elements from the DOM
    document.querySelectorAll('.tabs-item')
    
    // Remove the class "tabs-item-selected" from each element
    .forEach(link => link.classList.remove('tabs-item-selected'));
    
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }

  // deselect() {

  // }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link')
.forEach(link => new Tabs(link))
import styled from "styled-components";

const MegaMenuWrapper = styled.div`
  // .mega-menu-wrapper {
  //   position: absolute;
  //   top: 80px; /* Adjusts the position below the header */
  //   left: -200px;
  //   padding: 10px;
  //   width: 70vw;
  //   z-index: 1000;
  //   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  //   border-radius: 8px;
  //   max-height: 80vh;
  //   overflow-y: auto;
  //   background: #ffffff;
  //   transition: all 0.3s ease;
  // }

  .mega-menu {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
  }

  /* Left side menu titles */
  .menu-title-panel {
    width: 250px;
    background-color: #f9f9f9;
    padding: 20px;
    border-right: 1px solid #ddd;
  }

  .menu-title-item {
    color: #002145;
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 6px;
    margin-bottom: 8px;
    width: 100%;
  }

  .menu-title-item:hover {
    background-color: #002145 !important;
    color: #ed740a;
  }

  .menu-title-item.active {
    font-weight: bold;
    background-color: #002145 !important;;
    color: #ed740a;
  }

  /* Right content panel with two columns */
  .mega-menu-content {
    display: flex;  
    justify-content: space-between;
    flex-wrap: nowrap; 
    width: 100%;
    padding : 40px;
    background-color: #ffffff;  
  }

  .mega-menu-column {
    width: 50%; /* Ensures each column takes up exactly 50% of the width */
    padding: 10px;
    overflow-y: auto; /* If content overflows, adds scroll */
    max-height: 70vh; /* Restrict height */
    
    &::-webkit-scrollbar {
      width: 0px; /* Hides the scrollbar */
    }

    -ms-overflow-style: none;  /* For Internet Explorer */
    scrollbar-width: none; /* For Firefox */
  }

  .mega-menu-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mega-menu-list li {
    margin-bottom: 4px;
  }

  
  .mega-menu-list a {
    
    // text-decoration: none;
    font-size: 14px;
    transition: color 0.2s;
  }
    .mega-menu-list a:hover {
  // background-color: #002145;
  color: #ed740a;
  // display: inline-block;
  
  // padding: 8px 10px;
  // border-radius: 6px;
}

  /* Hide all tab content & images by default */
  .mega-menu-tabcontent,
  .more-demo-card,
  .mega-menu-img {
    display: none !important;
  }

  /* Responsive tweaks */
  @media (max-width: 1024px) {
    .mega-menu-wrapper {
      width: 80vw;
    }

    .mega-menu {
      flex-direction: column;
    }

    .menu-title-panel {
      width: 100%;
      border-right: none;
      border-bottom: 1px solid #ddd;
    }

    .mega-menu-content {
      padding: 15px;
    }
  }

  @media (max-width: 768px) {
    .mega-menu-column {
      width: 100%;
      padding-right: 0;
    }
  }
`;

export default MegaMenuWrapper;

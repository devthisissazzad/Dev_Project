import React from "react";
import Container from "../../Utils/Container/Container";




const FromOurMenu = () => {
  const menuItems = [
    { 
      name: "ROAST DUCK BREAST--------------------", 
      price: "$14.5", 
      description: "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce" 
    },
    { 
      name: "TUNA NIÇOISE--------------------", 
      price: "$14.5", 
      description: "Tuna served with gratin potato and a griottine cherry sauce" 
    },
    { 
      name: "ESCALOPE DE VEAU--------------------", 
      price: "$14.5", 
      description: "Veal escalope served with gratin potato and a griottine cherry sauce" 
    },
    { 
      name: "CHICKEN AND WALNUT SALAD--------------------", 
      price: "$14.5", 
      description: "Chicken and walnut salad with gratin potato and a griottine cherry sauce" 
    },
    { 
      name: "FISH PARMENTIER--------------------", 
      price: "$14.5", 
      description: "Fish Parmentier served with gratin potato and a griottine cherry sauce" 
    },
    { 
      name: "ROASTED PORK BELLY--------------------", 
      price: "$14.5", 
      description: "Roasted pork belly served with gratin potato and a griottine cherry sauce" 
    },
  ];

  return <div>
    <section>
      <Container className="w-[1320px]">
        
        <div className="flex justify-center mb-8 mt-[92px]">
          <h2 className="text-[20px] font-normal text-[#D99904] text-align items-center justify-between italic">---Check it out---</h2>
        </div>
        <div className='text-center mb-8'>
          <h2 className='border-t border-gray-300  my-2 w-1/3 inline-block '></h2>
        <h2 className="text-center text-[40px] font-normal my-5">FROM OUR MENU</h2>
          <h2 className='border-b border-gray-300  my-2 w-1/3 inline-block '></h2>

        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="flex justify-between w-[668px] items-center 0 pb-4 mb-4">
              <img className='px-7' src="../public/images/Menu_images.png" alt="images" />
              <div>
                <h4 className="text-[20px] text-[#151515] font-normal">{item.name}</h4>
                <p className="text-[#737373] text-[16px] font-normal">{item.description}</p>
              </div>
              <span className="text-[20px] font-normal text-[#BB8506]">{item.price}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-[#ffffff] border border-solid border-b-3xl border-[#000000] hover:border-white text-[#000000] font-semibold rounded-lg hover:bg-black hover:text-[#ffffff] transition duration-500 ">
            VIEW FULL MENU
          </button>
        </div>
       

       {/* call us start */}



      </Container>
    </section>
  </div>;
};

export default FromOurMenu;

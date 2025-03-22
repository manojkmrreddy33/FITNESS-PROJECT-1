import React, { useState } from "react";

import styled from "styled-components";
import F1 from "./images/Grilled_Chicken_Salad.jpg"
import F2 from "./images/Oatmeal_with_Berries.jpg"
import F3 from "./images/Quinoa_Veg_Bowl.jpg"
import F4 from "./images/Grilled_Salmon.jpg"
import F5 from "./images/Fruit_Smoothie.jpg"
import F6 from "./images/Boiled_Eggs.jpg"
import F7 from "./images/Tofu_Stir_Fry.jpg"
import F8 from "./images/Grilled_Paneer.jpg"
import F9 from "./images/Avocado_Toast.jpg"
import F10 from "./images/Chicken_Soup.jpg"
import F11 from "./images/Vegetable_Stir_Fry.jpg"
import F12 from "./images/Brown_Rice_with_Lentils.jpg"
import F13 from "./images/Egg_Salad.jpg"
import F14 from "./images/Greek_Yogurt_with_Nuts.jpg"
import F15 from "./images/Pasta_Primavera.jpg"
import F16 from "./images/Shrimp_Stir_Fry.jpg"
import F17 from "./images/Sweet_Potato_Mash.jpg"
import F18 from "./images/Turkey_Wrap.jpg"
import F19 from "./images/Spinach_and_Feta_Omelette.jpg"
import F20 from "./images/Zucchini_Noodles.jpg"
import F21 from "./images/Cottage_Cheese_Bowl.jpg"
import F22 from "./images/Mushroom_Soup.jpg"
import F23 from "./images/Grilled_Fish_Tacos (2).jpg"
import F24 from "./images/Chickpea_Salad.jpg"


const DietContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-y: auto;   /* Enables vertical scrolling */
  max-height: 700px;  /* Adjust height as needed */
`;  
const FilterSection = styled.div`
  display: flex;  
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.card_bg};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const FilterLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
`;

const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  outline: none;
`;



const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  padding: 20px;
  max-width: 1200px;
  margin-top: 10px;
`;

const FoodCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background: ${({ theme }) => theme.card_bg};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 5px;
  width: 100%;
`;

const FoodImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const FoodName = styled.h3`
  margin: 10px 0;
  color: ${({ theme }) => theme.primary};
`;

const Procedure = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

const Macros = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 5px;
  justify-content: space-between;
  font-size: 14px;
`;

const MacroItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
`;

const Diet = () => {
  const dietItems = [
  {
    id: 1,
    name: "Grilled Chicken Salad",
    image: F1,
    procedure: "Mix grilled chicken, fresh greens, cherry tomatoes, and olive oil.",
    macros: { calories: 350, protein: 30, carbs: 10, fats: 15 },
    type: "Non-Vegetarian",
  },
  {
    id: 2,
    name: "Oatmeal with Berries",
    image: F2,
    procedure: "Cook oats with almond milk, top with fresh berries and honey.",
    macros: { calories: 250, protein: 8, carbs: 40, fats: 5 },
    type: "Vegetarian",
  },
  {
    id: 3,
    name: "Quinoa Veg Bowl",
    image: F3,
    procedure: "Cook quinoa and mix with steamed vegetables and olive oil.",
    macros: { calories: 320, protein: 10, carbs: 45, fats: 8 },
    type: "Vegetarian",
  },
  {
    id: 4,
    name: "Grilled Salmon",
    image: F4,
    procedure: "Season salmon with herbs and grill until cooked.",
    macros: { calories: 400, protein: 35, carbs: 5, fats: 25 },
    type: "Non-Vegetarian",
  },
  {
    id: 5,
    name: "Fruit Smoothie",
    image: F5,
    procedure: "Blend fresh fruits, yogurt, and a splash of honey.",
    macros: { calories: 200, protein: 6, carbs: 30, fats: 3 },
    type: "Vegetarian",
  },
  {
    id: 6,
    name: "Boiled Eggs",
    image: F6,
    procedure: "Boil eggs for 10 minutes and season with salt and pepper.",
    macros: { calories: 150, protein: 13, carbs: 1, fats: 10 },
    type: "Non-Vegetarian",
  },
  {
    id: 7,
    name: "Tofu Stir Fry",
    image: F7,
    procedure: "Stir fry tofu with bell peppers, soy sauce, and ginger.",
    macros: { calories: 280, protein: 20, carbs: 15, fats: 12 },
    type: "Vegetarian",
  },
  {
    id: 8,
    name: "Grilled Paneer",
    image: F8,
    procedure: "Grill paneer cubes with spices and lemon juice.",
    macros: { calories: 300, protein: 18, carbs: 5, fats: 20 },
    type: "Vegetarian",
  },
  {
    id: 9,
    name: "Avocado Toast",
    image: F9,
    procedure: "Spread mashed avocado on whole grain toast and season.",
    macros: { calories: 220, protein: 5, carbs: 25, fats: 12 },
    type: "Vegetarian",
  },
  {
    id: 10,
    name: "Chicken Soup",
    image: F10,
    procedure: "Cook chicken with vegetables and broth for a hearty soup.",
    macros: { calories: 180, protein: 20, carbs: 8, fats: 5 },
    type: "Non-Vegetarian",
  },
  {
    id: 11,
    name: "Vegetable Stir Fry",
    image: F11,
    procedure: "Stir fry fresh vegetables with soy sauce and garlic.",
    macros: { calories: 120, protein: 3, carbs: 20, fats: 5 },
    type: "Vegetarian",
  },
  {
    id: 12,
    name: "Brown Rice with Lentils",
    image: F12,
    procedure: "Cook brown rice and mix with seasoned lentils.",
    macros: { calories: 350, protein: 15, carbs: 50, fats: 8 },
    type: "Vegetarian",
  },
  {
    id: 13,
    name: "Egg Salad",
    image: F13,
    procedure: "Mix boiled eggs with yogurt, mustard, and herbs.",
    macros: { calories: 250, protein: 18, carbs: 2, fats: 15 },
    type: "Non-Vegetarian",
  },
  {
    id: 14,
    name: "Greek Yogurt with Nuts",
    image: F14,
    procedure: "Top Greek yogurt with mixed nuts and honey.",
    macros: { calories: 200, protein: 12, carbs: 10, fats: 10 },
    type: "Vegetarian",
  },
  {
    id: 15,
    name: "Pasta Primavera",
    image: F15,
    procedure: "Cook whole wheat pasta and mix with fresh vegetables.",
    macros: { calories: 400, protein: 12, carbs: 60, fats: 10 },
    type: "Vegetarian",
  },
  {
    id: 16,
    name: "Shrimp Stir Fry",
    image: F16,
    procedure: "Stir fry shrimp with vegetables and soy sauce.",
    macros: { calories: 220, protein: 25, carbs: 8, fats: 5 },
    type: "Non-Vegetarian",
  },
  {
    id: 17,
    name: "Sweet Potato Mash",
    image: F17,
    procedure: "Mash boiled sweet potatoes and season with cinnamon.",
    macros: { calories: 180, protein: 2, carbs: 40, fats: 0 },
    type: "Vegetarian",
  },
  {
    id: 18,
    name: "Turkey Wrap",
    image: F18,
    procedure: "Wrap turkey slices with lettuce, tomato, and mustard in a tortilla.",
    macros: { calories: 2500, protein: 20, carbs: 25, fats: 8 },
    type: "Non-Vegetarian",
  },
  {
    id: 19,
    name: "Spinach and Feta Omelette",
    image: F19,
    procedure: "Cook an omelette with spinach and crumbled feta cheese.",
    macros: { calories: 250, protein: 20, carbs: 3, fats: 18 },
    type: "Vegetarian",
  },
  {
    id: 20,
    name: "Zucchini Noodles",
    image: F20,
    procedure: "Spiralize zucchini and toss with marinara sauce.",
    macros: { calories: 100, protein: 2, carbs: 15, fats: 3 },
    type: "Vegetarian",
  },
  {
    id: 21,
    name: "Cottage Cheese Bowl",
    image: F21,
    procedure: "Mix cottage cheese with fresh fruits and a drizzle of honey.",
    macros: { calories: 200, protein: 15, carbs: 15, fats: 6 },
    type: "Vegetarian",
  },
  {
    id: 22,
    name: "Mushroom Soup",
    image: F22,
    procedure: "Blend sautéed mushrooms with vegetable broth.",
    macros: { calories: 150, protein: 5, carbs: 10, fats: 7 },
    type: "Vegetarian",
  },
  {
    id: 23,
    name: "Grilled Fish Tacos",
    image: F23,
    procedure: "Grill fish fillets and serve in tortillas with fresh salsa.",
    macros: { calories: 1000, protein: 25, carbs: 20, fats: 10 },
    type: "Non-Vegetarian",
  },
  {
    id: 24,
    name: "Chickpea Salad",
    image: F24,
    procedure: "Mix chickpeas with cucumber, tomatoes, and lemon dressing.",
    macros: { calories: 250, protein: 10, carbs: 35, fats: 5 },
    type: "Vegetarian",
  },
];

  const [filters, setFilters] = useState({
    minCalories: 0,
    maxCalories: 3000,
    foodType: "",
  });

  const [filteredItems, setFilteredItems] = useState(dietItems);

  // Filter function
  const applyFilters = () => {
    const filtered = dietItems.filter((item) => {
      return (
        item.macros.calories >= filters.minCalories &&
        item.macros.calories <= filters.maxCalories &&
        (filters.foodType === "" || item.type === filters.foodType)
      );
    });
    setFilteredItems(filtered);
  };

  // Update filter values
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <DietContainer>
      <FilterSection>
        <FilterItem>
          <FilterLabel>Min Calories</FilterLabel>
          <FilterInput
            type="number"
            name="minCalories"
            value={filters.minCalories}
            onChange={handleFilterChange}
          />
        </FilterItem>
        <FilterItem>
          <FilterLabel>Max Calories</FilterLabel>
          <FilterInput
            type="number"
            name="maxCalories"
            value={filters.maxCalories}
            onChange={handleFilterChange}
          />
        </FilterItem>
        <FilterItem>
          <FilterLabel>Food Type</FilterLabel>
          <select
            name="foodType"
            value={filters.foodType}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
          </select>
        </FilterItem>
        <button onClick={applyFilters}>Apply Filters</button>
      </FilterSection>

      <FoodGrid>
        {filteredItems.map((item) => (
          <FoodCard key={item.id}>
            <FoodImage src={item.image} alt={item.name} />
            <FoodName>{item.name}</FoodName>
            <Procedure>Procedure: {item.procedure}</Procedure>
            <Macros>
              <MacroItem>
                <span>Calories</span>
                <span>{item.macros.calories} kcal</span>
              </MacroItem>
              <MacroItem>
                <span>Protein</span>
                <span>{item.macros.protein} g</span>
              </MacroItem>
              <MacroItem>
                <span>Carbs</span>
                <span>{item.macros.carbs} g</span>
              </MacroItem>
              <MacroItem>
                <span>Fats</span>
                <span>{item.macros.fats} g</span>
              </MacroItem>
            </Macros>
          </FoodCard>
        ))}
      </FoodGrid>
    </DietContainer>
  );
};

export default Diet;


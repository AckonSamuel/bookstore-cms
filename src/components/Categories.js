import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Status } from '../redux/categories/categories';
import Button from './Button';


const Categories = () => {
  const Categories = useSelector((state) => state.CategoriesReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(Status());
  };

  return (
    <>
      <Button text="Check Status" id="status" buttonType="button" onClick={handleClick} />
      {Categories}
    </>
  );
};

export default Categories;

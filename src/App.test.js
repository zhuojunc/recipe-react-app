import { render, screen } from '@testing-library/react';
import React from "react";
import ButtonBases from './ButtonBases';
import AddButton from './AddButton';
import Dialog from './Dialog';
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

test('Buttonbases: render Breakfast', () => {
  render(<ButtonBases />);
  const text = screen.getByText("Breakfast");
  expect(text).toBeInTheDocument();
});

test('Buttonbases: render Lunch', () => {
  render(<ButtonBases />);
  const text = screen.getByText("Lunch");
  expect(text).toBeInTheDocument();
});

test('Buttonbases: render Dinner', () => {
  render(<ButtonBases />);
  const text = screen.getByText("Dinner");
  expect(text).toBeInTheDocument();
});

test('AddButton render text', () => {
  render(<AddButton category="breakfast" />);
  const text = screen.getByText("Add a Recipe");
  expect(text).toBeInTheDocument();
});

test('Dialog render Button', () => {
  render(<Dialog id={1} title={"Avocado Toast"} />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test("Navigation: render Breakfast", () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const text = screen.getByText("Breakfast");
  expect(text).toBeInTheDocument();
});

test("Navigation: render Lunch", () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const text = screen.getByText("Lunch");
  expect(text).toBeInTheDocument();
});

test("Navigation: render Dinner", () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const text = screen.getByText("Dinner");
  expect(text).toBeInTheDocument();
});

test("Navigation: render Home", () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const text = screen.getByText("Home");
  expect(text).toBeInTheDocument();
});

test("Navigation: render Bookmark", () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const text = screen.getByText("Bookmark");
  expect(text).toBeInTheDocument();
});
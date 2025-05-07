// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2: For each, first 2 are true and second 2 are false. 

// isPhoneNumber tests.
test('Correct dashed phone number', () => {
  expect(isPhoneNumber("267-231-3223")).toBe(true);
});

test('Correct 1 dash only phone number', () => {
  expect(isPhoneNumber("123 321-3211")).toBe(true);
});

test('Incorrect short number', () => {
  expect(isPhoneNumber("123")).toBe(false);
});

test('Incorrect no dashes', () => {
  expect(isPhoneNumber("6183618732")).toBe(false);
});

// isEmail tests.
test('Correct gmail with @', () => {
  expect(isEmail("spongebob@gmail.com")).toBe(true);
});

test('Correct (different domain) ucsd email', () => {
  expect(isEmail("hi@ucsd.edu")).toBe(true);
});

test('Incorrect no @ email', () => {
  expect(isEmail("hiucsd.edu")).toBe(false);
});

test('Incorrect no domain email', () => {
  expect(isEmail("hi@.com")).toBe(false);
});

// isStrongPassword tests.
test('Correct password 4 characters', () => {
  expect(isStrongPassword("abcd")).toBe(true);
});

test('Correct password with underscore', () => {
  expect(isStrongPassword("abcs1_hithere")).toBe(true);
});

test('Incorrect: first character not a letter', () => {
  expect(isStrongPassword("12345")).toBe(false);
});

test('Incorrect: more than 15 characters', () => {
  expect(isStrongPassword("esrgredgsvesfsefscwasdwaswdawrrwerwdsaxasxwadarrrrwwww")).toBe(false);
});

// isDate tests.
test('Correct XX / XX / YYYY form', () => {
  expect(isDate("12/12/1212")).toBe(true);
});

test('Correct X / X / YYYY form with 1 instead of 2 for X', () => {
  expect(isDate("1/1/1212")).toBe(true);
});

test('Incorrect: YYYY is 3 digits long/too short', () => {
  expect(isDate("12/12/122")).toBe(false);
});

test('Incorrect: XX is three digits/too long', () => {
  expect(isDate("121/121/1212")).toBe(false);
});

// isHexColor tests. 
test('Correct pink hex', () => {
  expect(isHexColor("#FFC0CB")).toBe(true);
});

test('Correct blue hex', () => {
  expect(isHexColor("#0000FF")).toBe(true);
});

test('Incorrect: 2 characters and no #', () => {
  expect(isHexColor("CC")).toBe(false);
});

test('Incorrect: 7 characters', () => {
  expect(isHexColor("#FEWDSWDSDWSDWDSDW2SDW")).toBe(false);
});
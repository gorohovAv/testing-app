import Question from "./Question";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";
import {Step} from "../types/progress";
import type {Test} from "../types/test"
import {Selection, TextInput, SelectionType, InputType} from "../types/question";

const steps: Step[] = [
  { isDone: false, isActive: true },
  { isDone: false, isActive: false },
  { isDone: true, isActive: false },
  { isDone: false, isActive: true },
  { isDone: true, isActive: true },
  { isDone: false, isActive: false },
  { isDone: false, isActive: true },
  { isDone: true, isActive: false },
  { isDone: false, isActive: false },
  { isDone: true, isActive: false },
];

const myTest: Test<Selection | TextInput> = {
  header: "Тест по общим знаниям",
  questions: [
    {
      header: "Что такое HTML?",
      variants: ["Язык программирования", "Язык разметки", "Система управления базами данных"],
      type: SelectionType.Unary,
    },
    {
      header: "Выберите правильные утверждения о CSS:",
      variants: ["Он служит для стилизации веб-страниц", "Он не может использоваться с HTML", "Может быть встроен в HTML"],
      type: SelectionType.Multiple,
    },
    {
      header: "Какой язык используется для серверного программирования?",
      variants: ["JavaScript", "HTML", "CSS", "Python"],
      type: SelectionType.Unary,
    },
    {
      header: "Какой элемент HTML используется для создания ссылок?",
      variants: ["<link>", "<a>", "<href>", "<url>"],
      type: SelectionType.Unary,
    },
    {
      header: "Опишите, что такое JavaScript:",
      placeholder: "Ваш ответ здесь...",
      type: InputType.Short,
    },
    {
      header: "Какой метод используется для добавления элемента в массив в JavaScript?",
      variants: ["add()", "append()", "push()", "insert()"],
      type: SelectionType.Unary,
    },
    {
      header: "Выберите преимущества использования фреймов:",
      variants: ["Упрощает код", "Повышает производительность", "Снижает связность", "Упрощает стилизацию"],
      type: SelectionType.Multiple,
    },
    {
      header: "Напишите основное отличие между <div> и <span>:",
      placeholder: "Ваш ответ здесь...",
      type: InputType.Long,
    },
    {
      header: "Что такое AJAX?",
      variants: ["Язык программирования", "Метод работы с базами данных", "Технология для создания асинхронных запросов", "Стандарт для веб-дизайна"],
      type: SelectionType.Unary,
    },
    {
      header: "Опишите, что такое Responsive Web Design:",
      placeholder: "Ваш ответ здесь...",
      type: InputType.Short,
    },
  ],
  time: {hours: 0, minutes: 30, seconds: 0}
};

const Test: React.FC<Test> = () => {

  return (
    <>
      <header className="flex flex-row m-0 gap-3">
        <div className="text-4xl inline m-0">Название теста</div>
        <Timer initialSeconds={300}></Timer>
      </header>
      <ProgressBar props={steps}></ProgressBar>
      <Question question={}></Question>
    </>
  );
};

export default Test;

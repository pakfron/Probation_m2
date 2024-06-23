import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";

dayjs.extend(buddhistEra);

type TimeAttendanceData = [string, string, string];

interface EmployeeTimeData {
  clockIn: string;
  clockOut: string;
}

const timeAttendance: TimeAttendanceData[] = [
  ["240001", "07:23", "16:47"],
  ["240002", "08:15", "17:05"],
  ["240003", "", "18:19"],
  ["240004", "08:00", "17:35"],
  ["240005", "07:30", ""],
  ["240006", "08:12", "17:22"],
  ["240007", "", "16:11"],
  ["240008", "08:33", "17:48"],
  ["240009", "07:51", "16:25"],
  ["240010", "07:26", "16:41"],
];

function App() {
  const reduceRecordExample = () => {
    const data = timeAttendance.reduce(
      (acc: Record<string, EmployeeTimeData>, cur) => {
        const employeeData = {
          clockIn: cur[1],
          clockOut: cur[2],
        };
        acc[cur[0]] = employeeData;
        return acc;
      },
      {}
    );
    console.log(data);
  };
  const dayjsExample = () => {
    const day = undefined ?? "0";
    console.log(day);
    const today = dayjs();
    const start = dayjs("2024-06-21");
    const end = dayjs("2024-06-23");
    //add
    const yesterday = today.add(-1, "day").format("DD/MM/YYYY");
    const tomorrow = today.add(1, "day").format("DD/MM/YYYY");

    console.log("today : ", today.format("DD-MM-YYYY"));
    console.log("yesterday : ", yesterday);
    console.log("tomorrow : ", tomorrow);

    //subtract
    const yesterdaywithSubtract = today.subtract(1, "day").format("DD/MM/YYYY");
    console.log("yesterday with subtract", yesterdaywithSubtract);

    const diffInMinutes = end.diff(start, "minute"); // ต่างกันกี่นาที
    const diffInHours = end.diff(start, "hour"); // ต่างกันกี่ชั่วโมง
    const diffInDays = end.diff(start, "day"); // ต่างกันกี่วัน

    console.log(diffInMinutes); // 2880
    console.log(diffInHours); // 48
    console.log(diffInDays); // 2

    // isSame, isAfter, isBefore
    if (today.add(-1, "day").isSame(today.subtract(1, "day"))) {
      console.log("same day");
    }

    console.log(today.format("dddd DD MMM YYYY"), ": คศ");
    console.log(today.locale("th").format(" DD MMMM BBBB"), ": พ ศ");
  };

  const [count, setCount] = useState(0);

  return (
    <div className="h-[2000px]  w-[100vw]">
      <nav className="sticky p-2 bg-red-400 top-0">Navbar</nav>
      {dayjsExample()}
      {reduceRecordExample()}

      <div className="flex flex-row justify-center items-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
       
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <img className="w-[100px] float-left mr-2" src="https://images.pexels.com/photos/14918477/pexels-photo-14918477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ipsa
        tempore doloremque similique sit aperiam adipisci iste aliquid deserunt
        delectus dignissimos illum commodi eius dolores, doloribus quos
        accusantium officiis non!Lorem Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Perferendis, in expedita? Provident libero fuga
        facilis qui quaerat fugit laudantium modi. Quae facere repudiandae
        necessitatibus reprehenderit ipsa, deleniti tenetur repellat neque.
      </div>

      <div
        onClick={() => {
          window.scrollTo({
            top: 0,

            behavior: "smooth",
          });
        }}
        className="fixed bottom-[20px] right-[20px] cursor-pointer"
      >
        <div>ToUp</div>
      </div>
    </div>
  );
}

export default App;

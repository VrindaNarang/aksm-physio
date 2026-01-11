export interface BBSQuestion {
  id: number;
  question: string;
  instruction: string;
  options: { score: number; label: string }[];
}

export const bbsQuestions: BBSQuestion[] = [
  {
    id: 1,
    question: "Sitting to Standing",
    instruction: "Please stand up. Try not to use your hand for support.",
    options: [
      { score: 4, label: "Able to stand without using hands and stabilize independently" },
      { score: 3, label: "Able to stand independently using hands" },
      { score: 2, label: "Able to stand using hands after several tries" },
      { score: 1, label: "Needs minimal aid to stand or stabilize" },
      { score: 0, label: "Needs moderate or maximal assist to stand" },
    ],
  },
  {
    id: 2,
    question: "Standing Unsupported",
    instruction: "Please stand for two minutes without holding on.",
    options: [
      { score: 4, label: "Able to stand safely for 2 minutes" },
      { score: 3, label: "Able to stand 2 minutes with supervision" },
      { score: 2, label: "Able to stand 30 seconds unsupported" },
      { score: 1, label: "Needs several tries to stand 30 seconds unsupported" },
      { score: 0, label: "Unable to stand 30 seconds unsupported" },
    ],
  },
  {
    id: 3,
    question: "Sitting with Back Unsupported",
    instruction: "Please sit with arms folded for 2 minutes.",
    options: [
      { score: 4, label: "Able to sit safely and securely for 2 minutes" },
      { score: 3, label: "Able to sit 2 minutes under supervision" },
      { score: 2, label: "Able to able to sit 30 seconds" },
      { score: 1, label: "Able to sit 10 seconds" },
      { score: 0, label: "Unable to sit without support 10 seconds" },
    ],
  },
  {
    id: 4,
    question: "Standing to Sitting",
    instruction: "Please sit down.",
    options: [
      { score: 4, label: "Sits safely with minimal use of hands" },
      { score: 3, label: "Controls descent by using hands" },
      { score: 2, label: "Uses back of legs against chair to control descent" },
      { score: 1, label: "Sits independently but has uncontrolled descent" },
      { score: 0, label: "Needs assist to sit" },
    ],
  },
  {
    id: 5,
    question: "Transfers",
    instruction: "Arrange chair(s) for pivot transfer. Ask subject to transfer one way toward a seat with armrests and one way toward a seat without armrests.",
    options: [
      { score: 4, label: "Able to transfer safely with minor use of hands" },
      { score: 3, label: "Able to transfer safely definite need of hands" },
      { score: 2, label: "Able to transfer with verbal cuing and/or supervision" },
      { score: 1, label: "Needs one person to assist" },
      { score: 0, label: "Needs two people to assist or supervise to be safe" },
    ],
  },
  {
    id: 6,
    question: "Standing Unsupported with Eyes Closed",
    instruction: "Please close your eyes and stand still for 10 seconds.",
    options: [
      { score: 4, label: "Able to stand 10 seconds safely" },
      { score: 3, label: "Able to stand 10 seconds with supervision" },
      { score: 2, label: "Able to stand 3 seconds" },
      { score: 1, label: "Unable to keep eyes closed 3 seconds but stays steady" },
      { score: 0, label: "Needs help to keep from falling" },
    ],
  },
  {
    id: 7,
    question: "Standing Unsupported with Feet Together",
    instruction: "Place your feet together and stand without holding on.",
    options: [
      { score: 4, label: "Able to place feet together independently and stand 1 minute safely" },
      { score: 3, label: "Able to place feet together independently and stand 1 minute with supervision" },
      { score: 2, label: "Able to place feet together independently but unable to hold for 30 seconds" },
      { score: 1, label: "Needs help to attain position but able to stand 15 seconds with feet together" },
      { score: 0, label: "Needs help to attain position and unable to hold for 15 seconds" },
    ],
  },
  {
    id: 8,
    question: "Reaching Forward with Outstretched Arm",
    instruction: "Lift arm to 90 degrees. Stretch out your fingers and reach forward as far as you can.",
    options: [
      { score: 4, label: "Can reach forward confidently 25 cm (10 inches)" },
      { score: 3, label: "Can reach forward 12 cm (5 inches)" },
      { score: 2, label: "Can reach forward 5 cm (2 inches)" },
      { score: 1, label: "Reaches forward but needs supervision" },
      { score: 0, label: "Loses balance while trying/requires external support" },
    ],
  },
  {
    id: 9,
    question: "Retrieving Object from Floor",
    instruction: "Pick up the shoe/slipper, which is placed in front of your feet.",
    options: [
      { score: 4, label: "Able to pick up slipper safely and easily" },
      { score: 3, label: "Able to pick up slipper but needs supervision" },
      { score: 2, label: "Unable to pick up but reaches 2-5 cm (1-2 inches) from slipper and keeps balance independently" },
      { score: 1, label: "Unable to pick up and needs supervision while trying" },
      { score: 0, label: "Unable to try/needs assist to keep from losing balance or falling" },
    ],
  },
  {
    id: 10,
    question: "Turning to Look Behind",
    instruction: "Turn to look directly behind you over toward the left shoulder. Repeat to the right.",
    options: [
      { score: 4, label: "Looks behind from both sides and weight shifts well" },
      { score: 3, label: "Looks behind one side only other side shows less weight shift" },
      { score: 2, label: "Turns sideways only but maintains balance" },
      { score: 1, label: "Needs supervision when turning" },
      { score: 0, label: "Needs assist to keep from losing balance or falling" },
    ],
  },
  {
    id: 11,
    question: "Turning 360 Degrees",
    instruction: "Turn completely around in a full circle. Pause. Then turn a full circle in the other direction.",
    options: [
      { score: 4, label: "Able to turn 360 degrees safely in 4 seconds or less" },
      { score: 3, label: "Able to turn 360 degrees safely one side only 4 seconds or less" },
      { score: 2, label: "Able to turn 360 degrees safely but slowly" },
      { score: 1, label: "Needs close supervision or verbal cuing" },
      { score: 0, label: "Needs assistance while turning" },
    ],
  },
  {
    id: 12,
    question: "Placing Alternate Foot on Stool",
    instruction: "Place each foot alternately on the step/stool. Continue until each foot has touched the step/stool 4 times.",
    options: [
      { score: 4, label: "Able to stand independently and safely and complete 8 steps in 20 seconds" },
      { score: 3, label: "Able to stand independently and complete 8 steps > 20 seconds" },
      { score: 2, label: "Able to complete 4 steps without aid with supervision" },
      { score: 1, label: "Able to complete > 2 steps needs minimal assist" },
      { score: 0, label: "Needs assistance to keep from falling/unable to try" },
    ],
  },
  {
    id: 13,
    question: "Standing with One Foot in Front (Tandem)",
    instruction: "Place one foot directly in front of the other. If you feel that you cannot place your foot directly in front, try to step far enough ahead that the heel of your forward foot is ahead of the toes of the other foot.",
    options: [
      { score: 4, label: "Able to place foot tandem independently and hold 30 seconds" },
      { score: 3, label: "Able to place foot ahead independently and hold 30 seconds" },
      { score: 2, label: "Able to take small step independently and hold 30 seconds" },
      { score: 1, label: "Needs help to step but can hold 15 seconds" },
      { score: 0, label: "Loses balance while stepping or standing" },
    ],
  },
  {
    id: 14,
    question: "Standing on One Leg",
    instruction: "Stand on one leg as long as you can without holding on.",
    options: [
      { score: 4, label: "Able to lift leg independently and hold > 10 seconds" },
      { score: 3, label: "Able to lift leg independently and hold 5-10 seconds" },
      { score: 2, label: "Able to lift leg independently and hold >= 3 seconds" },
      { score: 1, label: "Tries to lift leg unable to hold 3 seconds but remains standing independently" },
      { score: 0, label: "Unable to try of needs assist to prevent fall" },
    ],
  },
];

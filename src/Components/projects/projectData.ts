export interface IProjectData {
    id: number;
    status: string;
    name: string;
    info: string;
}

export const projectsData: IProjectData[] = [
    {
        id: 1,
        status: "",
        name: "",
        info:
            "You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
        id: 2,
        status: "🙏",
        name: "",
        info:
            "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
        id: 3, 
        status: "🤣",
        name: "",
        info:
            "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    }
];

// export default projectsData;
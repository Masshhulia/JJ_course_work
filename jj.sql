--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

-- Started on 2024-11-24 15:55:43

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 222 (class 1259 OID 16972)
-- Name: Achievements; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Achievements" (
    "achievement_ID" integer NOT NULL,
    achievement_name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Achievements" OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16971)
-- Name: Achievements_achievement_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Achievements_achievement_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Achievements_achievement_ID_seq" OWNER TO postgres;

--
-- TOC entry 3446 (class 0 OID 0)
-- Dependencies: 221
-- Name: Achievements_achievement_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Achievements_achievement_ID_seq" OWNED BY public."Achievements"."achievement_ID";


--
-- TOC entry 220 (class 1259 OID 16956)
-- Name: CompletedRoadmaps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CompletedRoadmaps" (
    user_id integer NOT NULL,
    "roadmap_ID" integer NOT NULL,
    completion_date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."CompletedRoadmaps" OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 17032)
-- Name: Options; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Options" (
    "option_ID" integer NOT NULL,
    "questions_ID" integer,
    option_text text NOT NULL,
    "isCorrect" boolean,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Options" OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 17031)
-- Name: Options_option_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Options_option_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Options_option_ID_seq" OWNER TO postgres;

--
-- TOC entry 3447 (class 0 OID 0)
-- Dependencies: 230
-- Name: Options_option_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Options_option_ID_seq" OWNED BY public."Options"."option_ID";


--
-- TOC entry 229 (class 1259 OID 17023)
-- Name: Questions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Questions" (
    "question_ID" integer NOT NULL,
    question_text text NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Questions" OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 17022)
-- Name: Questions_question_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Questions_question_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Questions_question_ID_seq" OWNER TO postgres;

--
-- TOC entry 3448 (class 0 OID 0)
-- Dependencies: 228
-- Name: Questions_question_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Questions_question_ID_seq" OWNED BY public."Questions"."question_ID";


--
-- TOC entry 219 (class 1259 OID 16950)
-- Name: Roadmaps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Roadmaps" (
    "roadmap_ID" integer NOT NULL,
    title character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Roadmaps" OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 17009)
-- Name: RoadmapsLinks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."RoadmapsLinks" (
    "link_ID" integer NOT NULL,
    "pages_ID" integer,
    link_title character varying(255) NOT NULL,
    url character varying(500) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."RoadmapsLinks" OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 17008)
-- Name: RoadmapsLinks_link_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."RoadmapsLinks_link_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RoadmapsLinks_link_ID_seq" OWNER TO postgres;

--
-- TOC entry 3449 (class 0 OID 0)
-- Dependencies: 226
-- Name: RoadmapsLinks_link_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."RoadmapsLinks_link_ID_seq" OWNED BY public."RoadmapsLinks"."link_ID";


--
-- TOC entry 225 (class 1259 OID 16994)
-- Name: RoadmapsPages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."RoadmapsPages" (
    "page_ID" integer NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    creation_date timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "roadmap_ID" integer
);


ALTER TABLE public."RoadmapsPages" OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16993)
-- Name: RoadmapsPages_page_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."RoadmapsPages_page_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."RoadmapsPages_page_ID_seq" OWNER TO postgres;

--
-- TOC entry 3450 (class 0 OID 0)
-- Dependencies: 224
-- Name: RoadmapsPages_page_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."RoadmapsPages_page_ID_seq" OWNED BY public."RoadmapsPages"."page_ID";


--
-- TOC entry 218 (class 1259 OID 16949)
-- Name: Roadmaps_roadmap_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Roadmaps_roadmap_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Roadmaps_roadmap_ID_seq" OWNER TO postgres;

--
-- TOC entry 3451 (class 0 OID 0)
-- Dependencies: 218
-- Name: Roadmaps_roadmap_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Roadmaps_roadmap_ID_seq" OWNED BY public."Roadmaps"."roadmap_ID";


--
-- TOC entry 235 (class 1259 OID 17055)
-- Name: TestResults; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."TestResults" (
    "result_ID" integer NOT NULL,
    user_id integer,
    "tests_ID" integer,
    score integer,
    test_date timestamp with time zone DEFAULT CURRENT_DATE,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."TestResults" OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 17054)
-- Name: TestResults_result_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."TestResults_result_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."TestResults_result_ID_seq" OWNER TO postgres;

--
-- TOC entry 3452 (class 0 OID 0)
-- Dependencies: 234
-- Name: TestResults_result_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."TestResults_result_ID_seq" OWNED BY public."TestResults"."result_ID";


--
-- TOC entry 233 (class 1259 OID 17046)
-- Name: Tests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Tests" (
    "test_ID" integer NOT NULL,
    title character varying(500) NOT NULL,
    "Description" text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Tests" OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 17045)
-- Name: Tests_test_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Tests_test_ID_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Tests_test_ID_seq" OWNER TO postgres;

--
-- TOC entry 3453 (class 0 OID 0)
-- Dependencies: 232
-- Name: Tests_test_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Tests_test_ID_seq" OWNED BY public."Tests"."test_ID";


--
-- TOC entry 217 (class 1259 OID 16938)
-- Name: UsageDays; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."UsageDays" (
    id integer NOT NULL,
    user_id integer,
    usage_date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."UsageDays" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16937)
-- Name: UsageDays_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."UsageDays_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."UsageDays_id_seq" OWNER TO postgres;

--
-- TOC entry 3454 (class 0 OID 0)
-- Dependencies: 216
-- Name: UsageDays_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."UsageDays_id_seq" OWNED BY public."UsageDays".id;


--
-- TOC entry 223 (class 1259 OID 16978)
-- Name: UserAchievements; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."UserAchievements" (
    user_id integer NOT NULL,
    "achievements_ID" integer NOT NULL,
    achievement_date timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."UserAchievements" OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16924)
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    name character varying(50),
    last_name character varying(255),
    password character varying(255) NOT NULL,
    email character varying(255),
    job character varying(255),
    linked_in character varying(255),
    "RegistrationDate" timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16923)
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- TOC entry 3455 (class 0 OID 0)
-- Dependencies: 214
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- TOC entry 3230 (class 2604 OID 16975)
-- Name: Achievements achievement_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Achievements" ALTER COLUMN "achievement_ID" SET DEFAULT nextval('public."Achievements_achievement_ID_seq"'::regclass);


--
-- TOC entry 3235 (class 2604 OID 17035)
-- Name: Options option_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Options" ALTER COLUMN "option_ID" SET DEFAULT nextval('public."Options_option_ID_seq"'::regclass);


--
-- TOC entry 3234 (class 2604 OID 17026)
-- Name: Questions question_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Questions" ALTER COLUMN "question_ID" SET DEFAULT nextval('public."Questions_question_ID_seq"'::regclass);


--
-- TOC entry 3229 (class 2604 OID 16953)
-- Name: Roadmaps roadmap_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roadmaps" ALTER COLUMN "roadmap_ID" SET DEFAULT nextval('public."Roadmaps_roadmap_ID_seq"'::regclass);


--
-- TOC entry 3233 (class 2604 OID 17012)
-- Name: RoadmapsLinks link_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RoadmapsLinks" ALTER COLUMN "link_ID" SET DEFAULT nextval('public."RoadmapsLinks_link_ID_seq"'::regclass);


--
-- TOC entry 3231 (class 2604 OID 16997)
-- Name: RoadmapsPages page_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RoadmapsPages" ALTER COLUMN "page_ID" SET DEFAULT nextval('public."RoadmapsPages_page_ID_seq"'::regclass);


--
-- TOC entry 3237 (class 2604 OID 17058)
-- Name: TestResults result_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TestResults" ALTER COLUMN "result_ID" SET DEFAULT nextval('public."TestResults_result_ID_seq"'::regclass);


--
-- TOC entry 3236 (class 2604 OID 17049)
-- Name: Tests test_ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tests" ALTER COLUMN "test_ID" SET DEFAULT nextval('public."Tests_test_ID_seq"'::regclass);


--
-- TOC entry 3228 (class 2604 OID 16941)
-- Name: UsageDays id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UsageDays" ALTER COLUMN id SET DEFAULT nextval('public."UsageDays_id_seq"'::regclass);


--
-- TOC entry 3226 (class 2604 OID 16927)
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- TOC entry 3427 (class 0 OID 16972)
-- Dependencies: 222
-- Data for Name: Achievements; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Achievements" ("achievement_ID", achievement_name, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3425 (class 0 OID 16956)
-- Dependencies: 220
-- Data for Name: CompletedRoadmaps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CompletedRoadmaps" (user_id, "roadmap_ID", completion_date, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3436 (class 0 OID 17032)
-- Dependencies: 231
-- Data for Name: Options; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Options" ("option_ID", "questions_ID", option_text, "isCorrect", "createdAt", "updatedAt") FROM stdin;
1	1	When you need to define an object type's characteristics, use an interface. When you need to define an object type's capabilities, use an abstract class.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
2	1	Interfaces are a legacy of older versions of C#, and are interchangeable with the newer abstract class feature.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
3	1	When you need a list of capabilities and data that are classes-agnostic, use an interface. When you need a certain object type to share characteristics, use an abstract class.	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
4	1	You should use both an interface and an abstract class when defining any complex object.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
5	2	Delegates are not supported in the current version of C#	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
6	2	They cannot be used as callbacks.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
7	2	Only variables can be passed to delegates as parameters.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
8	2	They can be chained together.	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
9	3	reactive	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
10	3	inherited callback	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
11	3	 task-based	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
12	3	 callback-based	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
13	4	Variables passed to specify that the parameter is an output parameter, while ref specifies that a variable may be passed to a function without being initialized.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
14	4	 Variables passed to ref can be passed to a function without being initialized, while out specifies that the value is a reference value that can be changed inside the calling method.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
15	4	Variables passed to out can be passed to a function without being initialized, while ref specifies that the value is a reference value that can be changed inside the calling method.	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
16	4	Variables passed to ref specify that the parameter is an output parameter, while out specifies that a variable may be passed to a function without being initialized.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
17	5	 reflection	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
18	5	 serialization	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
19	5	abstraction	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
20	5	dependency injection	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
21	6	Anonymous types don't have type names	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
22	6	 Anonymous types can only be static	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
23	6	Anonymous types can be used only in struts	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
24	6	Anonymous types don't work with LINQ.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
25	7	When you need a jagged collection structure	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
26	7	When you need to store values of the same type	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
27	7	When you need to store key-value pairs rather than single values	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
28	7	When you need an ordered, searchable list	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
29	8	The .Equals method compares reference identities while the == compares contents.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
30	8	The .Equals method compares primitive values while == compares all values.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
31	8	The .Equals method compares contents while == compares reference identity.	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
32	8	The .Equals method compares reference types while == compares primitive value types	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
33	9	when you try to instantiate two objects at the same time in the same class or struct	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
34	9	 when you are trying to execute an action after a user event is registered	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
35	9	when simultaneous instructions are waiting on each other to finish before executing	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
36	9	when you try to execute a series of events simultaneously on multiple threads	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
37	10	It allows access to asynchronous methods in the C# API	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
38	10	It allows thread pooling and synchronous processes in static classes.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
39	10	It allows the await keyword to be used in a method	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
40	10	It allows access to synchronous methods in the C# API	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
41	11	a class or struct, including its variables and functions	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
42	11	a primitive data type that can be created only at compile time	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
43	11	a value type that can be used only with an abstract class	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
44	11	an instance of a class or struct that includes fields, properties, and/or methods	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
45	12	Namespaces	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
46	12	LINQ	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
47	12	Type Aliasing	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
49	12	 Assemblies	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
50	13	Make it public	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
51	13	Make it static	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
52	13	Make it private	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
53	13	Make it virtual	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
54	14	public int Age { get - set }	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
55	14	 public int Age: get set;	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
56	14	public int Age (get, set );	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
57	14	public int Age { get; set; }	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
58	15	 a class that is denoted by the class keyword (can be seen and used by any other class in the system--thus it is by default public)	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
59	15	something denoted by the abstract keyword and used system-wide; if you want any program to create an object of a class you use the abstract class	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
60	15	a class that is denoted by the virtual keyword	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
61	15	a class that can be used only as a base class	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
62	16	The thread is destroyed and memory is freed up.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
63	16	The thread runs in a loop until the next assignment.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
64	16	The thread goes inactive in the background and waits for garbage collection.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
65	16	The thread returns to the pool for reuse.	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
66	17	 a second base class	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
67	17	a revised class	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
68	17	a derived class	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
69	17	 a parent class	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
70	18	hide built-in operators when necessary	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
71	18	add methods to be interpreted by the compiler at runtime	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
72	18	define how enums and other primitive value types work within the rest of the application	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
73	18	define custom functionality for common operators like addition and equality	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
74	19	to delete duplicate data	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
75	19	to bind namespaces and assemblies	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
76	19	to query and transform data	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
77	19	to connect assemblies	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
78	20	public List contacts = new List();	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
79	20	public List(string names) contacts = new List(string names)();	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
80	20	var contacts = new List();	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
81	20	var contacts = new List(string);	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
82	21	Throw clauses fire only at runtime, while throw exceptions can fire at any time.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
83	21	Throw exceptions overwrite the stack trace, while throw clauses retain the stack information.	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
84	21	Throw clauses overwrite the stack trace, while throw exceptions retain the stack information.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
85	21	Throw exceptions fire only at runtime, while throw clauses can fire during compile time.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
86	22	 unordered collections of numeric values	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
87	22	key-value pairs of any C# supported type	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
88	22	class and struct instances	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
89	22	multiple variables, or collections, of the same type	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
90	23	d	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
91	23	\\a	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
92	23	\\b	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
93	23	\\w	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
94	24	A regular expression is a C# tool used to parse HTML	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
95	24	A regular expression is a special text string for describing a search pattern.	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
96	24	A regular expression allows a variable to be passed by reference.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
97	24	A regular expression allows a class to conform to the Equatable protocol.	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
98	25	To define the behaviors of the class	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
99	25	To hold information and data contained in the class object	t	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
100	25	To communicate between classes and object	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
101	25	To store the class definition value	f	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
\.


--
-- TOC entry 3434 (class 0 OID 17023)
-- Dependencies: 229
-- Data for Name: Questions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Questions" ("question_ID", question_text, "createdAt", "updatedAt") FROM stdin;
1	In which of these situations are interfaces better than abstract classes?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
2	Which statement is true of delegates?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
3	Which choice best defines C#'s asynchronous programming model?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
4	What is the difference between the ref and out keywords?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
5	How could you retrieve information about a class, as well as create an instance at runtime?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
6	What is the difference between an anonymous type and a regular data type?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
7	When would you use a Dictionary rather than an Array type in your application?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
8	What is the difference between a.Equals(b) and a == b?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
9	Which choice best describes a deadlock situation?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
10	How does the async keyword work?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
11	What is an object in C#?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
12	Lambda expressions are often used in tandem with which of the following?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
13	 How do you make a method in an abstract class overridable?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
14	 How would you write code for an integer property called Age with a getter and setter?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
15	What is an abstract class?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
16	When using a thread pool what happens to a given thread after it finishes its task?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
17	Which choice represents a class that inherits behavior from a base class?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
18	What does operator overloading allow you to do?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
19	What is the main purpose of LINQ?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
20	What is the correct syntax for a new generic list of strings named contacts?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
21	What are C# events?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
22	What kind of values can arrays store?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
23	What character would you use to start a regular expression pattern at a word boundary?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
24	What is the most accurate description of a regular expression?	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
25	Why would you use a class field in C#	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
\.


--
-- TOC entry 3424 (class 0 OID 16950)
-- Dependencies: 219
-- Data for Name: Roadmaps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Roadmaps" ("roadmap_ID", title, "createdAt", "updatedAt") FROM stdin;
1	HTML	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
2	CSS	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
3	JavaScript	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
4	GIT	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
5	Package Managers	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
6	npm 	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
7	Frontend Framework	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
8	React 	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
9	CSS Framework	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
10	Tailwind	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
11	Testing Your Apps	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
12	Jest	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
\.


--
-- TOC entry 3432 (class 0 OID 17009)
-- Dependencies: 227
-- Data for Name: RoadmapsLinks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."RoadmapsLinks" ("link_ID", "pages_ID", link_title, url, "createdAt", "updatedAt") FROM stdin;
1	1	W3Schools: Learn HTML	https://www.w3schools.com/html/html_intro.asp	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
2	1	htmlreference.io: All HTML elements at a glance	https://htmlreference.io/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
3	1	HTML For Beginners The Easy Way	https://html.com/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
4	2	The Odin Project	https://www.theodinproject.com//	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
5	1	Web Development Basics	https://internetingishard.netlify.app/html-and-css/index.html	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
6	1	Codecademy - Learn HTML	https://www.codecademy.com/learn/learn-html	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
7	1	Interactive HTML Course	https://github.com/denysdovhan/learnyouhtml	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
8	1	HTML Full Course for Beginners | Complete All-in-One Tutorial	https://youtu.be/mJgBOIoGihA	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
9	1	HTML Full Course - Build a Website Tutorial	https://www.youtube.com/watch?v=pQN-pnXPaVg	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
10	1	HTML Tutorial for Beginners: HTML Crash Course	https://www.youtube.com/watch?v=qz0aGYrrlhU	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
11	2	What The Flexbox!	https://flexbox.io/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
12	2	Learn CSS | Codecademy	https://www.codecademy.com/learn/learn-css	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
13	2	Learn Intermediate CSS | Codecademy\n	https://www.codecademy.com/learn/learn-intermediate-css	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
14	2	CSS Complete Course	https://youtu.be/n4R2E7O-Ngo	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
15	2	CSS Crash Course For Absolute Beginners	https://www.youtube.com/watch?v=yfoY53QXEnI	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
16	2	CSS Masterclass - Tutorial & Course for Beginners	https://www.youtube.com/watch?v=FqmB-Zj2-PA	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
17	3	Visit Dedicated JavaScript Roadmap	https://roadmap.sh/javascript	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
18	3	W3Schools – JavaScript Tutorial	https://www.w3schools.com/js/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
19	3	The Modern JavaScript Tutorial	https://javascript.info/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
20	3	Learn JavaScript: Covered many topics	https://www.javascripttutorial.net/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
21	3	Eloquent JavaScript textbook	https://eloquentjavascript.net/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
22	3	You Dont Know JS Yet (book series)	https://github.com/getify/You-Dont-Know-JS	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
23	4	Git & GitHub Crash Course For Beginners	https://www.youtube.com/watch?v=SWYqp7iY_Tc	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
24	4	Learn Git with Tutorials, News and Tips - Atlassian	https://www.atlassian.com/git	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
25	4	Git Cheat Sheet	https://cs.fyi/guide/git-cheatsheet	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
26	4	Tutorial: Git for Absolutely Everyone	https://thenewstack.io/tutorial-git-for-absolutely-everyone/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
27	5	Modern JavaScript for Dinosaurs	https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
28	5	An Absolute Beginners Guide to Using npm	https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
29	5	Yarn - Getting Started	https://yarnpkg.com/en/docs/getting-started	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
30	5	NPM tutorial for Beginners	https://www.youtube.com/watch?v=2V1UUhBJ62Y	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
31	5	NPM Crash Course	https://www.youtube.com/watch?v=jHDhaSSKmB0	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
32	5	Yarn Crash Course	https://www.youtube.com/watch?v=g9_6KmiBISk	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
33	6	How to NPM	https://github.com/workshopper/how-to-npm	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
34	6	NPM tutorial for Beginners	https://www.youtube.com/watch?v=2V1UUhBJ62Y	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
35	7	What is the difference between a framework and a library?	https://www.youtube.com/watch?v=D_MO9vIRBcA	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
36	7	Which JS Framework is best?	https://www.youtube.com/watch?v=cuHDQhDhvPE	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
37	8	React Website	https://react.dev/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
38	8	Official Getting Started	https://react.dev/learn/tutorial-tic-tac-toe	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
39	8	The Beginners Guide to React	https://egghead.io/courses/the-beginner-s-guide-to-react	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
40	8	React JS Course for Beginners	https://www.youtube.com/watch?v=nTeuhbP7wdE	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
41	9	CSS Frameworks Introduction	https://en.wikipedia.org/wiki/CSS_framework	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
42	9	What are the benefits of using a css framework	https://css-tricks.com/what-are-the-benefits-of-using-a-css-framework/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
43	10	Tailwind Website	https://tailwindcss.com/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
44	10	Tailwind CSS Full Course for Beginners	https://www.youtube.com/watch?v=lCxcTsOHrjo	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
45	10	Tailwind CSS Crash Course	https://www.youtube.com/watch?v=UBOj6rqRUME	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
46	10	Should You Use Tailwind CSS?	https://www.youtube.com/watch?v=hdGsFpZ0J2E	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
47	10	Official Screencasts	https://www.youtube.com/c/TailwindLabs/videos	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
48	11	A comprehensive dive into software testing.	https://www.softwaretestingmaterial.com/software-testing/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
49	11	The different types of software tests	https://www.atlassian.com/continuous-delivery/software-testing/types-of-software-testing	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
50	11	Testing React apps with Jest	https://jestjs.io/docs/tutorial-react	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
51	12	Jest Website	https://jestjs.io/	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
\.


--
-- TOC entry 3430 (class 0 OID 16994)
-- Dependencies: 225
-- Data for Name: RoadmapsPages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."RoadmapsPages" ("page_ID", title, description, creation_date, "createdAt", "updatedAt", "roadmap_ID") FROM stdin;
1	HTML	HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	1
2	CSS	CSS or Cascading Style Sheets is the language used to style the frontend of any website. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	2
3	JavaScript	JavaScript allows you to add interactivity to your pages. Common examples that you may have seen on the websites are sliders, click interactions, popups and so on.\n\nVisit the following resources to learn more:	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	3
4	GIT	Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.\n\nVisit the following resources to learn more:	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	4
5	Package Managers	Package managers allow you to manage the dependencies (external code written by you or someone else) that your project needs to work correctly.\n\nVisit the following resources to learn more:	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	5
6	npm	npm is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js.\n\nVisit the following resources to learn more:	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	6
7	Pick a Framework	Web frameworks are designed to write web applications. Frameworks are collections of libraries that aid in the development of a software product or website. Frameworks for web application development are collections of various tools. Frameworks vary in their capabilities and functions, depending on the tasks set. They define the structure, establish the rules, and provide the development tools required.\n\nVisit the following resources to learn more:	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	7
8	React	React is the most popular front-end JavaScript library for building user interfaces. React can also render on the server using Node and power mobile apps using React Native.\n\nVisit the following resources to learn more:	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	8
9	CSS frameworks	A CSS framework provides the user with a fully functional CSS stylesheet, allowing them to create a web page by simply coding the HTML with appropriate classes, structure, and IDs. Classes for popular website features like as the footer, slider, navigation bar, hamburger menu, column-based layouts, and so on are already included in the framework.\n\nVisit the following resources to learn more:	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	9
10	Tailwind CSS	CSS Framework that provides atomic CSS classes to help you style components e.g. flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.\n\nVisit the following resources to learn more:	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	10
11	Testing your apps	Before delivering your application to users, you need to be sure that your app meets the requirements it was designed for, and that it doesn’t do any weird, unintended things (called ‘bugs’). To accomplish this, we ‘test’ our applications in different ways.\n\nVisit the following resources to learn more:	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	11
12	Jest	Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!\n\nVisit the following resources to learn more:	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03	12
\.


--
-- TOC entry 3440 (class 0 OID 17055)
-- Dependencies: 235
-- Data for Name: TestResults; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."TestResults" ("result_ID", user_id, "tests_ID", score, test_date, "createdAt", "updatedAt") FROM stdin;
20	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 18:34:35.932+03	2023-12-11 18:34:35.932+03
21	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 18:41:13.875+03	2023-12-11 18:41:13.875+03
22	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 18:41:28.191+03	2023-12-11 18:41:28.191+03
23	\N	1	0	2023-12-11 03:00:00+03	2023-12-11 18:41:43.131+03	2023-12-11 18:41:43.131+03
24	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 20:28:14.969+03	2023-12-11 20:28:14.969+03
25	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 20:33:12.289+03	2023-12-11 20:33:12.289+03
26	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 20:34:59.22+03	2023-12-11 20:34:59.22+03
27	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 20:49:09.08+03	2023-12-11 20:49:09.08+03
28	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 20:51:12.067+03	2023-12-11 20:51:12.067+03
29	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 20:52:21.676+03	2023-12-11 20:52:21.676+03
30	\N	1	\N	2023-12-11 03:00:00+03	2023-12-11 20:53:43.802+03	2023-12-11 20:53:43.802+03
31	\N	1	\N	2023-12-11 03:00:00+03	2023-12-11 20:55:08.506+03	2023-12-11 20:55:08.506+03
32	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 20:56:18.189+03	2023-12-11 20:56:18.189+03
33	\N	1	7	2023-12-11 03:00:00+03	2023-12-11 20:58:52.394+03	2023-12-11 20:58:52.394+03
34	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 20:59:34.807+03	2023-12-11 20:59:34.807+03
35	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 21:00:09.08+03	2023-12-11 21:00:09.08+03
36	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 21:05:49.466+03	2023-12-11 21:05:49.466+03
37	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 21:10:18.834+03	2023-12-11 21:10:18.834+03
38	\N	1	1	2023-12-11 03:00:00+03	2023-12-11 21:11:53.533+03	2023-12-11 21:11:53.533+03
39	\N	1	1	2023-12-12 03:00:00+03	2023-12-12 09:20:46.33+03	2023-12-12 09:20:46.33+03
40	\N	1	1	2023-12-12 03:00:00+03	2023-12-12 09:22:56.513+03	2023-12-12 09:22:56.513+03
41	\N	\N	0	2023-12-12 03:00:00+03	2023-12-12 09:26:18.203+03	2023-12-12 09:26:18.203+03
42	\N	\N	0	2023-12-12 03:00:00+03	2023-12-12 09:28:39.254+03	2023-12-12 09:28:39.254+03
43	\N	\N	0	2023-12-12 03:00:00+03	2023-12-12 09:32:56.763+03	2023-12-12 09:32:56.763+03
44	\N	1	1	2023-12-12 03:00:00+03	2023-12-12 09:33:56.235+03	2023-12-12 09:33:56.235+03
45	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 09:34:26.19+03	2023-12-12 09:34:26.19+03
46	\N	\N	2	2023-12-12 03:00:00+03	2023-12-12 09:37:19.287+03	2023-12-12 09:37:19.287+03
47	\N	\N	2	2023-12-12 03:00:00+03	2023-12-12 09:39:22.197+03	2023-12-12 09:39:22.197+03
48	\N	1	3	2023-12-12 03:00:00+03	2023-12-12 09:43:26.265+03	2023-12-12 09:43:26.265+03
49	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 10:46:05.72+03	2023-12-12 10:46:05.72+03
50	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 10:46:06.281+03	2023-12-12 10:46:06.281+03
51	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 10:58:56.485+03	2023-12-12 10:58:56.485+03
52	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 11:01:54.516+03	2023-12-12 11:01:54.516+03
53	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 11:18:19.034+03	2023-12-12 11:18:19.034+03
54	\N	1	3	2023-12-12 03:00:00+03	2023-12-12 11:23:38.295+03	2023-12-12 11:23:38.295+03
55	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 11:24:14.192+03	2023-12-12 11:24:14.192+03
56	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 11:33:18.482+03	2023-12-12 11:33:18.482+03
57	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 11:36:14.736+03	2023-12-12 11:36:14.736+03
58	\N	1	3	2023-12-12 03:00:00+03	2023-12-12 11:36:40.312+03	2023-12-12 11:36:40.312+03
59	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 11:42:47.858+03	2023-12-12 11:42:47.858+03
60	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 14:05:42.863+03	2023-12-12 14:05:42.863+03
61	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 14:10:57.829+03	2023-12-12 14:10:57.829+03
62	\N	1	3	2023-12-12 03:00:00+03	2023-12-12 14:12:21.776+03	2023-12-12 14:12:21.776+03
63	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 14:12:53.74+03	2023-12-12 14:12:53.74+03
64	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 14:14:36.386+03	2023-12-12 14:14:36.386+03
65	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 14:21:28.758+03	2023-12-12 14:21:28.758+03
66	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 14:29:43.522+03	2023-12-12 14:29:43.522+03
67	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 14:32:39.423+03	2023-12-12 14:32:39.423+03
68	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 15:54:38.264+03	2023-12-12 15:54:38.264+03
69	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 15:57:00.627+03	2023-12-12 15:57:00.627+03
70	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 16:08:14.565+03	2023-12-12 16:08:14.565+03
71	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 16:10:54.211+03	2023-12-12 16:10:54.211+03
72	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 16:19:41.306+03	2023-12-12 16:19:41.306+03
73	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 16:22:46.709+03	2023-12-12 16:22:46.709+03
74	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 16:29:01.225+03	2023-12-12 16:29:01.225+03
75	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 16:30:37.044+03	2023-12-12 16:30:37.044+03
76	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 16:36:43.923+03	2023-12-12 16:36:43.923+03
77	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 16:41:01.091+03	2023-12-12 16:41:01.091+03
78	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 16:49:49.851+03	2023-12-12 16:49:49.851+03
79	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 16:55:44.281+03	2023-12-12 16:55:44.281+03
80	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 19:15:38.14+03	2023-12-12 19:15:38.14+03
81	\N	1	3	2023-12-12 03:00:00+03	2023-12-12 19:57:36.147+03	2023-12-12 19:57:36.147+03
82	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 20:43:49.153+03	2023-12-12 20:43:49.153+03
83	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 20:53:47.592+03	2023-12-12 20:53:47.592+03
84	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 20:57:56.691+03	2023-12-12 20:57:56.691+03
85	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 21:03:09.706+03	2023-12-12 21:03:09.706+03
86	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 21:05:00.002+03	2023-12-12 21:05:00.002+03
87	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 21:08:02.942+03	2023-12-12 21:08:02.942+03
88	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 21:14:50.794+03	2023-12-12 21:14:50.794+03
89	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 21:17:21.219+03	2023-12-12 21:17:21.219+03
90	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 21:19:50.604+03	2023-12-12 21:19:50.604+03
91	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 21:24:13.135+03	2023-12-12 21:24:13.135+03
92	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 21:25:49.985+03	2023-12-12 21:25:49.985+03
93	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 21:30:13.855+03	2023-12-12 21:30:13.855+03
94	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 21:33:14.663+03	2023-12-12 21:33:14.663+03
95	\N	1	0	2023-12-12 03:00:00+03	2023-12-12 21:34:25.87+03	2023-12-12 21:34:25.87+03
96	\N	1	4	2023-12-12 03:00:00+03	2023-12-12 22:22:53.833+03	2023-12-12 22:22:53.833+03
97	\N	1	3	2023-12-13 03:00:00+03	2023-12-13 10:45:29.989+03	2023-12-13 10:45:29.989+03
98	\N	1	50	2023-12-13 03:00:00+03	2023-12-13 10:59:16.488+03	2023-12-13 10:59:16.488+03
99	\N	1	73	2023-12-13 03:00:00+03	2023-12-13 13:56:46.145+03	2023-12-13 13:56:46.145+03
100	\N	1	36	2023-12-13 03:00:00+03	2023-12-13 14:35:35.259+03	2023-12-13 14:35:35.259+03
101	\N	1	27	2023-12-13 03:00:00+03	2023-12-13 14:39:32.206+03	2023-12-13 14:39:32.206+03
102	\N	1	36	2023-12-13 03:00:00+03	2023-12-13 15:21:53.228+03	2023-12-13 15:21:53.228+03
103	\N	1	64	2023-12-13 03:00:00+03	2023-12-13 15:26:41.316+03	2023-12-13 15:26:41.316+03
104	\N	1	64	2023-12-13 03:00:00+03	2023-12-13 15:29:55.275+03	2023-12-13 15:29:55.275+03
105	\N	1	27	2023-12-13 03:00:00+03	2023-12-13 16:32:24.365+03	2023-12-13 16:32:24.365+03
106	\N	1	18	2023-12-13 03:00:00+03	2023-12-13 16:35:24.876+03	2023-12-13 16:35:24.876+03
107	\N	1	18	2023-12-13 03:00:00+03	2023-12-13 16:38:32.149+03	2023-12-13 16:38:32.149+03
108	\N	1	18	2023-12-13 03:00:00+03	2023-12-13 16:41:54.555+03	2023-12-13 16:41:54.555+03
109	\N	1	18	2023-12-13 03:00:00+03	2023-12-13 16:42:47.401+03	2023-12-13 16:42:47.401+03
110	\N	1	18	2023-12-13 03:00:00+03	2023-12-13 16:46:22.373+03	2023-12-13 16:46:22.373+03
111	\N	1	18	2023-12-13 03:00:00+03	2023-12-13 16:51:35.869+03	2023-12-13 16:51:35.869+03
112	\N	1	18	2023-12-13 03:00:00+03	2023-12-13 16:51:51.22+03	2023-12-13 16:51:51.22+03
113	\N	1	18	2023-12-13 03:00:00+03	2023-12-13 16:58:36.467+03	2023-12-13 16:58:36.467+03
114	\N	1	18	2023-12-13 03:00:00+03	2023-12-13 16:59:32.421+03	2023-12-13 16:59:32.421+03
115	\N	1	18	2023-12-13 03:00:00+03	2023-12-13 17:00:39.738+03	2023-12-13 17:00:39.738+03
116	\N	1	18	2023-12-13 03:00:00+03	2023-12-13 17:04:43.52+03	2023-12-13 17:04:43.52+03
117	\N	1	18	2023-12-13 03:00:00+03	2023-12-13 17:07:28.836+03	2023-12-13 17:07:28.836+03
118	\N	1	18	2023-12-13 03:00:00+03	2023-12-13 17:08:11.55+03	2023-12-13 17:08:11.55+03
119	\N	1	64	2023-12-13 03:00:00+03	2023-12-13 19:28:53.557+03	2023-12-13 19:28:53.557+03
120	1	1	77	2023-12-13 03:00:00+03	2023-12-13 03:00:00+03	2023-12-13 03:00:00+03
121	\N	1	36	2023-12-13 03:00:00+03	2023-12-13 22:08:35.889+03	2023-12-13 22:08:35.889+03
122	\N	1	45	2023-12-14 03:00:00+03	2023-12-14 13:02:31.679+03	2023-12-14 13:02:31.679+03
123	18	1	18	2023-12-14 03:00:00+03	2023-12-14 13:11:59.857+03	2023-12-14 13:11:59.857+03
124	18	1	36	2023-12-14 03:00:00+03	2023-12-14 13:33:05.481+03	2023-12-14 13:33:05.481+03
125	19	1	36	2023-12-14 03:00:00+03	2023-12-14 13:39:33.411+03	2023-12-14 13:39:33.411+03
126	20	1	27	2023-12-14 03:00:00+03	2023-12-14 13:41:40.192+03	2023-12-14 13:41:40.192+03
127	19	1	55	2023-12-14 03:00:00+03	2023-12-14 14:15:10.151+03	2023-12-14 14:15:10.151+03
128	19	1	45	2023-12-14 03:00:00+03	2023-12-14 16:56:27.046+03	2023-12-14 16:56:27.046+03
129	19	1	45	2023-12-14 03:00:00+03	2023-12-14 17:01:40.387+03	2023-12-14 17:01:40.387+03
130	19	1	27	2023-12-14 03:00:00+03	2023-12-14 17:08:51.122+03	2023-12-14 17:08:51.122+03
131	19	1	36	2023-12-14 03:00:00+03	2023-12-14 17:13:59.586+03	2023-12-14 17:13:59.586+03
132	19	1	18	2023-12-14 03:00:00+03	2023-12-14 17:38:53.239+03	2023-12-14 17:38:53.239+03
133	19	1	45	2023-12-14 03:00:00+03	2023-12-14 17:55:48.151+03	2023-12-14 17:55:48.151+03
134	19	1	45	2023-12-14 03:00:00+03	2023-12-14 19:13:41.667+03	2023-12-14 19:13:41.667+03
135	19	1	36	2023-12-15 03:00:00+03	2023-12-15 16:10:27.753+03	2023-12-15 16:10:27.753+03
136	19	1	18	2023-12-15 03:00:00+03	2023-12-15 16:13:41.356+03	2023-12-15 16:13:41.356+03
137	19	1	18	2023-12-15 03:00:00+03	2023-12-15 16:26:01.462+03	2023-12-15 16:26:01.462+03
138	19	1	18	2023-12-15 03:00:00+03	2023-12-15 16:29:59.902+03	2023-12-15 16:29:59.902+03
139	19	1	18	2023-12-15 03:00:00+03	2023-12-15 16:31:15.076+03	2023-12-15 16:31:15.076+03
140	19	1	18	2023-12-15 03:00:00+03	2023-12-15 16:32:51.256+03	2023-12-15 16:32:51.256+03
141	19	1	18	2023-12-15 03:00:00+03	2023-12-15 16:37:03.661+03	2023-12-15 16:37:03.661+03
142	19	1	18	2023-12-15 03:00:00+03	2023-12-15 16:41:14.802+03	2023-12-15 16:41:14.802+03
143	19	1	55	2023-12-15 03:00:00+03	2023-12-15 16:42:03.957+03	2023-12-15 16:42:03.957+03
144	18	1	55	2023-12-15 03:00:00+03	2023-12-15 17:18:39.915+03	2023-12-15 17:18:39.915+03
145	18	1	45	2023-12-15 03:00:00+03	2023-12-15 18:44:46.748+03	2023-12-15 18:44:46.748+03
146	19	1	27	2023-12-15 03:00:00+03	2023-12-15 19:17:51.791+03	2023-12-15 19:17:51.791+03
147	19	1	27	2023-12-15 03:00:00+03	2023-12-15 19:22:27.574+03	2023-12-15 19:22:27.574+03
148	19	1	27	2023-12-15 03:00:00+03	2023-12-15 19:25:51.722+03	2023-12-15 19:25:51.722+03
149	19	1	27	2023-12-15 03:00:00+03	2023-12-15 19:26:44.328+03	2023-12-15 19:26:44.328+03
150	19	1	27	2023-12-15 03:00:00+03	2023-12-15 19:28:29.567+03	2023-12-15 19:28:29.567+03
151	19	1	73	2023-12-17 03:00:00+03	2023-12-17 13:27:53.104+03	2023-12-17 13:27:53.104+03
152	19	1	55	2023-12-17 03:00:00+03	2023-12-17 15:11:46.05+03	2023-12-17 15:11:46.05+03
153	19	1	45	2023-12-17 03:00:00+03	2023-12-17 15:13:22.439+03	2023-12-17 15:13:22.439+03
154	19	1	18	2023-12-17 03:00:00+03	2023-12-17 15:15:59.604+03	2023-12-17 15:15:59.604+03
155	19	1	64	2023-12-18 03:00:00+03	2023-12-18 11:26:38.317+03	2023-12-18 11:26:38.317+03
156	19	1	9	2023-12-18 03:00:00+03	2023-12-18 11:37:52.672+03	2023-12-18 11:37:52.672+03
157	24	1	55	2023-12-19 03:00:00+03	2023-12-19 11:50:35.185+03	2023-12-19 11:50:35.185+03
158	24	1	27	2023-12-19 03:00:00+03	2023-12-19 17:02:19.616+03	2023-12-19 17:02:19.616+03
159	26	1	27	2023-12-23 03:00:00+03	2023-12-23 10:53:33.353+03	2023-12-23 10:53:33.353+03
160	26	1	55	2023-12-23 03:00:00+03	2023-12-23 10:54:13.459+03	2023-12-23 10:54:13.459+03
161	24	1	64	2023-12-23 03:00:00+03	2023-12-23 20:29:34.054+03	2023-12-23 20:29:34.054+03
162	24	1	60	2023-12-23 03:00:00+03	2023-12-23 23:14:38.438+03	2023-12-23 23:14:38.438+03
163	24	1	32	2023-12-24 03:00:00+03	2023-12-24 11:09:03.847+03	2023-12-24 11:09:03.847+03
164	31	1	33	2024-05-19 03:00:00+03	2024-05-19 19:57:15.036+03	2024-05-19 19:57:15.036+03
165	31	1	20	2024-05-19 03:00:00+03	2024-05-19 20:00:07.442+03	2024-05-19 20:00:07.442+03
166	31	1	20	2024-05-19 03:00:00+03	2024-05-19 20:02:50.471+03	2024-05-19 20:02:50.471+03
\.


--
-- TOC entry 3438 (class 0 OID 17046)
-- Dependencies: 233
-- Data for Name: Tests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Tests" ("test_ID", title, "Description", "createdAt", "updatedAt") FROM stdin;
1	C# questions	Test, rate and improve your C# knowledge with these questions.	2023-11-28 21:23:00.441914+03	2023-11-28 21:23:00.441914+03
\.


--
-- TOC entry 3422 (class 0 OID 16938)
-- Dependencies: 217
-- Data for Name: UsageDays; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."UsageDays" (id, user_id, usage_date, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3428 (class 0 OID 16978)
-- Dependencies: 223
-- Data for Name: UserAchievements; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."UserAchievements" (user_id, "achievements_ID", achievement_date, "createdAt", "updatedAt") FROM stdin;
\.


--
-- TOC entry 3420 (class 0 OID 16924)
-- Dependencies: 215
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, name, last_name, password, email, job, linked_in, "RegistrationDate", "createdAt", "updatedAt") FROM stdin;
1	Maria	Basharimova	287w291	mabhsxjhbs@jnds.com	backend_dev	kjbcdjbsdcj	2023-11-02 20:19:47.767093+03	2023-11-02 20:19:47.761+03	2023-11-02 20:19:47.761+03
19	CИКОР	СИКОР	$2b$05$sEakWcX1kbEjEduQ8Nd5MesQpaZXFa3Dg9RZI/MinewNA9KENFNjq	777	\N	\N	2023-12-07 12:26:24.358069+03	2023-12-07 12:26:24.335+03	2023-12-07 12:26:24.335+03
20	VANYA	TUBIK	$2b$05$CJyhDa8Luo73yLDMVYvuLuVVzrOcTOTzO/mSB2N5gmksHKb.X8IK.	666	\N	\N	2023-12-14 13:40:21.099111+03	2023-12-14 13:40:21.094+03	2023-12-14 13:40:21.094+03
22	Polina	Seleznyova	$2b$05$Y8UcIoFv7wJ6ewzfiHHge.J.wEad4OhTFcvYq5UnAb2OYkq0XAtc6	seleznyova@gmail.com	\N	\N	2023-12-15 21:08:26.095902+03	2023-12-15 21:08:26.075+03	2023-12-15 21:08:26.075+03
18	Илья	Бараболя	$2b$05$R/swX2HpcTmNPgBMLQeqX.TXJaFWXXPjbyu783ziq51M9Dl2yuLMy	555	junior music developer	sacsdc	2023-12-01 11:19:08.638486+03	2023-12-01 11:19:08.619+03	2023-12-01 11:19:08.619+03
24	Alyona	Stankevich	$2b$05$g8A.ZPMEHoaRMhCd/hSTi.BouMo59Y8DMcgH6LDhavbLDluwj.GOG	stankevich@gmail.com	junior frontend developer	stankevichalyona	2023-12-17 19:17:35.708914+03	2023-12-17 19:17:35.701+03	2023-12-17 19:17:35.701+03
25	ADMIN	ADMIN	$2b$05$k4mbCtPof21BhGJsWTLc/uAsZZ8RHISBoWKISj4/BKQEuvEH7VMr.	ADMIN	ADMIN	ADMIN	2023-12-18 18:56:30.979524+03	2023-12-18 18:56:30.972+03	2023-12-18 18:56:30.972+03
26	Veronika	Kushner	$2b$05$EUMijTGzgb3eAZdrAvQPP.RUS0Ul9k7vSR2FDFpPzw8ewN7aUPTBy	kusha@gmail.com	QA tester	kushkusha	2023-12-19 17:49:36.574189+03	2023-12-19 17:49:36.55+03	2023-12-19 17:49:36.55+03
27	1	1	$2b$05$LvvCpjuMUAU3mWNyV2bBReKxW5lsoui9FpaV/bGwY48LNlac5sYd2	772	1	1	2023-12-22 23:22:10.242695+03	2023-12-22 23:22:10.224+03	2023-12-22 23:22:10.224+03
28	Maksim	Yakshonak	$2b$05$abjpYgi7zCBh7bHy8f8DluHs8mQBmDsZWlYQdQaA5Ioh6VGXfw.N2	yak@mail.ru	Video Maker	yakshonak	2023-12-22 23:23:59.519706+03	2023-12-22 23:23:59.515+03	2023-12-22 23:23:59.515+03
29	Nastya	Ivanovskaya	$2b$05$S8PlyZbGjWz/J/Wo.VukIeKfE7.Joou6Xv7wg8H1u9pFa1NmAUK.K	ivanovskaya@mail.ru	HR	nastushaI	2023-12-22 23:46:56.812245+03	2023-12-22 23:46:56.784+03	2023-12-22 23:46:56.784+03
30	Anton	Kushner	$2b$05$bJUbaxPetaG1RBkwWtBkdesmDWq3RjI3wSPK.orIf/iaJKYBvzin.	anton@mail	kjb	lmn	2023-12-23 00:00:19.065705+03	2023-12-23 00:00:19.046+03	2023-12-23 00:00:19.046+03
31	Anton	Shurin	$2b$05$mNT9b5jrw9UCSiq/axw7EeeD8EHG7uA0WNcoxBN23SF/NVxAUSKDC	shura@mail.ru	game developer	sssshhhuuurrin	2024-05-19 19:36:41.818579+03	2024-05-19 19:36:41.812+03	2024-05-19 19:36:41.812+03
32	Наталья	Дритова	$2b$05$UwmirsH2Y7v1lV.fJG4PKuWcZOZgLXjIz.r/8K9l2Ja8ebnGynxyW	dr@mail.ru	teacher	-	2024-05-19 20:06:13.467909+03	2024-05-19 20:06:13.466+03	2024-05-19 20:06:13.466+03
33	Mary	Basharimova	$2b$05$kcugn6AL65lAd.frwcQU1.ZD6f/gW7V.2ROGmxJcWe1Q.TRvmGR36	ya.basharimova@yandex.ru	Project Manager	basharimovamaria	2024-11-07 22:25:45.304016+03	2024-11-07 22:25:45.286+03	2024-11-07 22:25:45.286+03
\.


--
-- TOC entry 3456 (class 0 OID 0)
-- Dependencies: 221
-- Name: Achievements_achievement_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Achievements_achievement_ID_seq"', 1, false);


--
-- TOC entry 3457 (class 0 OID 0)
-- Dependencies: 230
-- Name: Options_option_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Options_option_ID_seq"', 1, false);


--
-- TOC entry 3458 (class 0 OID 0)
-- Dependencies: 228
-- Name: Questions_question_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Questions_question_ID_seq"', 14, true);


--
-- TOC entry 3459 (class 0 OID 0)
-- Dependencies: 226
-- Name: RoadmapsLinks_link_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."RoadmapsLinks_link_ID_seq"', 53, true);


--
-- TOC entry 3460 (class 0 OID 0)
-- Dependencies: 224
-- Name: RoadmapsPages_page_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."RoadmapsPages_page_ID_seq"', 1, false);


--
-- TOC entry 3461 (class 0 OID 0)
-- Dependencies: 218
-- Name: Roadmaps_roadmap_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Roadmaps_roadmap_ID_seq"', 2, true);


--
-- TOC entry 3462 (class 0 OID 0)
-- Dependencies: 234
-- Name: TestResults_result_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."TestResults_result_ID_seq"', 166, true);


--
-- TOC entry 3463 (class 0 OID 0)
-- Dependencies: 232
-- Name: Tests_test_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Tests_test_ID_seq"', 1, false);


--
-- TOC entry 3464 (class 0 OID 0)
-- Dependencies: 216
-- Name: UsageDays_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."UsageDays_id_seq"', 1, false);


--
-- TOC entry 3465 (class 0 OID 0)
-- Dependencies: 214
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 33, true);


--
-- TOC entry 3252 (class 2606 OID 16977)
-- Name: Achievements Achievements_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Achievements"
    ADD CONSTRAINT "Achievements_pkey" PRIMARY KEY ("achievement_ID");


--
-- TOC entry 3250 (class 2606 OID 16960)
-- Name: CompletedRoadmaps CompletedRoadmaps_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CompletedRoadmaps"
    ADD CONSTRAINT "CompletedRoadmaps_pkey" PRIMARY KEY (user_id, "roadmap_ID");


--
-- TOC entry 3262 (class 2606 OID 17039)
-- Name: Options Options_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Options"
    ADD CONSTRAINT "Options_pkey" PRIMARY KEY ("option_ID");


--
-- TOC entry 3260 (class 2606 OID 17030)
-- Name: Questions Questions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Questions"
    ADD CONSTRAINT "Questions_pkey" PRIMARY KEY ("question_ID");


--
-- TOC entry 3258 (class 2606 OID 17016)
-- Name: RoadmapsLinks RoadmapsLinks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RoadmapsLinks"
    ADD CONSTRAINT "RoadmapsLinks_pkey" PRIMARY KEY ("link_ID");


--
-- TOC entry 3256 (class 2606 OID 17002)
-- Name: RoadmapsPages RoadmapsPages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RoadmapsPages"
    ADD CONSTRAINT "RoadmapsPages_pkey" PRIMARY KEY ("page_ID");


--
-- TOC entry 3248 (class 2606 OID 16955)
-- Name: Roadmaps Roadmaps_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roadmaps"
    ADD CONSTRAINT "Roadmaps_pkey" PRIMARY KEY ("roadmap_ID");


--
-- TOC entry 3266 (class 2606 OID 17061)
-- Name: TestResults TestResults_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TestResults"
    ADD CONSTRAINT "TestResults_pkey" PRIMARY KEY ("result_ID");


--
-- TOC entry 3264 (class 2606 OID 17053)
-- Name: Tests Tests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Tests"
    ADD CONSTRAINT "Tests_pkey" PRIMARY KEY ("test_ID");


--
-- TOC entry 3246 (class 2606 OID 16943)
-- Name: UsageDays UsageDays_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UsageDays"
    ADD CONSTRAINT "UsageDays_pkey" PRIMARY KEY (id);


--
-- TOC entry 3254 (class 2606 OID 16982)
-- Name: UserAchievements UserAchievements_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserAchievements"
    ADD CONSTRAINT "UserAchievements_pkey" PRIMARY KEY (user_id, "achievements_ID");


--
-- TOC entry 3240 (class 2606 OID 16934)
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- TOC entry 3242 (class 2606 OID 16936)
-- Name: Users Users_linked_in_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_linked_in_key" UNIQUE (linked_in);


--
-- TOC entry 3244 (class 2606 OID 16932)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- TOC entry 3268 (class 2606 OID 16966)
-- Name: CompletedRoadmaps CompletedRoadmaps_roadmap_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CompletedRoadmaps"
    ADD CONSTRAINT "CompletedRoadmaps_roadmap_ID_fkey" FOREIGN KEY ("roadmap_ID") REFERENCES public."Roadmaps"("roadmap_ID") ON UPDATE CASCADE;


--
-- TOC entry 3269 (class 2606 OID 16961)
-- Name: CompletedRoadmaps CompletedRoadmaps_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CompletedRoadmaps"
    ADD CONSTRAINT "CompletedRoadmaps_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE CASCADE;


--
-- TOC entry 3274 (class 2606 OID 17040)
-- Name: Options Options_questions_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Options"
    ADD CONSTRAINT "Options_questions_ID_fkey" FOREIGN KEY ("questions_ID") REFERENCES public."Questions"("question_ID") ON UPDATE CASCADE;


--
-- TOC entry 3273 (class 2606 OID 17017)
-- Name: RoadmapsLinks RoadmapsLinks_pages_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RoadmapsLinks"
    ADD CONSTRAINT "RoadmapsLinks_pages_ID_fkey" FOREIGN KEY ("pages_ID") REFERENCES public."RoadmapsPages"("page_ID") ON UPDATE CASCADE;


--
-- TOC entry 3272 (class 2606 OID 17003)
-- Name: RoadmapsPages RoadmapsPages_roadmap_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."RoadmapsPages"
    ADD CONSTRAINT "RoadmapsPages_roadmap_ID_fkey" FOREIGN KEY ("roadmap_ID") REFERENCES public."Roadmaps"("roadmap_ID") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- TOC entry 3275 (class 2606 OID 17067)
-- Name: TestResults TestResults_tests_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TestResults"
    ADD CONSTRAINT "TestResults_tests_ID_fkey" FOREIGN KEY ("tests_ID") REFERENCES public."Tests"("test_ID") ON UPDATE CASCADE;


--
-- TOC entry 3276 (class 2606 OID 17062)
-- Name: TestResults TestResults_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TestResults"
    ADD CONSTRAINT "TestResults_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE CASCADE;


--
-- TOC entry 3267 (class 2606 OID 16944)
-- Name: UsageDays UsageDays_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UsageDays"
    ADD CONSTRAINT "UsageDays_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE CASCADE;


--
-- TOC entry 3270 (class 2606 OID 16988)
-- Name: UserAchievements UserAchievements_achievements_ID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserAchievements"
    ADD CONSTRAINT "UserAchievements_achievements_ID_fkey" FOREIGN KEY ("achievements_ID") REFERENCES public."Achievements"("achievement_ID") ON UPDATE CASCADE;


--
-- TOC entry 3271 (class 2606 OID 16983)
-- Name: UserAchievements UserAchievements_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserAchievements"
    ADD CONSTRAINT "UserAchievements_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."Users"(id) ON UPDATE CASCADE;


-- Completed on 2024-11-24 15:55:43

--
-- PostgreSQL database dump complete
--


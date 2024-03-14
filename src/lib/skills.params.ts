import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'JavaScript(JS) is a high-level, interpreted programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use it, and all major web browsers have a dedicated JavaScript engine to execute it.  JavaScript enables interactive web pages and is essential for web applications. It is used to add dynamic and interactive elements to web pages, such as menus, forms, animations, and games. It is also used to create web servers and mobile apps.',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description:
			'TypeScript is a programming language that builds on JavaScript, adding static type definitions. This means that TypeScript has all the features of JavaScript, plus the ability to define the types of variables, functions, and objects. This can help to catch errors early on, and make code more maintainable.  TypeScript is compiled into JavaScript, so it can be used anywhere that JavaScript can be used.  This includes web browsers, servers, and mobile devices.',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'CSS stands for Cascading Style Sheets, which is a computer language that describes how to present documents written in HTML or XML. CSS is used to specify how elements should be displayed on screen, in speech, on paper, or in other media. CSS can be used to adjust content size, spacing, color, and font, and can also add decorative features, such as animations or split content into columns.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.  Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'python',
		color: 'yellow',
		description:
			'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python\'s simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.  React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.  A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'aws',
		color: 'orange',
		description: 'Amazon Web Services (AWS) is a cloud service that offers access to IT resources like storage, databases, and computing power on-demand. AWS offers over 200 services, including analytics, mobile, security, networking, developer tools, management tools, IoT, databases, storage, and compute.',
		logo: Assets.AWS,
		name: 'AWS'
	}),
	s({
		slug: 'bootstrap',
		color: 'purple',
		description: 'Bootstrap CSS is a free, open-source toolkit for developing websites that are responsive and mobile-first. It includes a responsive grid system, global CSS settings, and pre-built components like buttons, navbars, and forms. Bootstrap is a frontend development framework that allows developers to quickly build responsive websites. It is a collection of reusable code written in HTML, CSS, and JavaScript. Bootstrap saves developers time by eliminating the need to write CSS code.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap'
	}),
	s({
		slug: 'django',
		color: 'green',
		description: 'Django is a free and open-source web framework, written in Python, that follows the model-template-views (MTV) architectural pattern. It is used to build secure and maintainable websites. Django takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel.',
		logo: Assets.Django,
		name: 'Django'
	}),
	s({
		slug: 'nodejs',
		color: 'green',
		description: 'Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web pages.',
		logo: Assets.NodeJs,
		name: 'NodeJs'
	}),
	s({
		slug: 'expressjs',
		color: 'gray',
		description: 'Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.[3] It has been called the de facto standard server framework for Node.js.',
		logo: Assets.ExpressJs,
		name: 'ExpressJs'
	}),
	s({
		slug: 'nextjs',
		color: 'gray',
		description: 'Next.js is a React framework that provides server-rendered React applications with features like hybrid static & server rendering, static site generation, TypeScript support, smart bundling, and routing. It was created by Vercel(formerly Zeit) and is used by some of the world\'s largest companies, including Netflix, Twitch, and Airbnb.',
		logo: Assets.NextJs,
		name: 'NextJs'
	}),
	s({
		slug: 'postgresql',
		color: 'blue',
		description: 'PostgreSQL also known as Postgres, is a free and open-source relational database management system (RDBMS) emphasizing extensibility and SQL compliance.  PostgreSQL features transactions with atomicity, consistency, isolation, durability (ACID) properties, automatically updatable views, materialized views, triggers, foreign keys, and stored procedures.  It is supported on all major operating systems, including Linux, FreeBSD, OpenBSD, macOS, and Windows, and handles a range of workloads from single machines to data warehouses or web services with many concurrent users.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL'
	}),
	s({
		slug: 'tailwind',
		color: 'cyan',
		description: 'Tailwind CSS is an open-source CSS framework that allows users to build websites without leaving their HTML. It provides a set of utility classes that can be combined to create designs, and it automatically removes unused CSS when building for production.',
		logo: Assets.Tailwind,
		name: 'Tailwind'
	}),
	s({
		slug: 'oracle',
		color: 'red',
		description: 'Oracle RDBMS, or Oracle Database, is a relational database management system (RDBMS) that stores, organizes, and retrieves data by type. RDBMS software manages, stores, queries, and retrieves data stored in a relational database. Oracle RDBMS uses SQL (Structured Query Language) to design databases that manage records, execute operations, and retrieve information. It uses row and column tables to structure databases.',
		logo: Assets.Oracle,
		name: 'Oracle'
	}),
	s({
		slug: 'reduxjs',
		color: 'purple',
		description: 'Redux is a JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Redux is a small library with a simple, limited API designed to be a predictable container for application state. It operates in a fashion similar to a reducing function, a functional programming concept.',
		logo: Assets.ReduxJs,
		name: 'ReduxJs'
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));

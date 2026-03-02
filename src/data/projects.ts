export interface Project {
    title: string
    stack: string
    points: string[]
  }
  
  export const projects: Project[] = [
    {
      title: "Gym Scheduler Agent",
      stack: "Python, LangChain v1+, LangGraph, FastAPI, ChromaDB, OpenAI API",
      points: [
        "Built a ReAct-based AI agent that analyzes calendar events, meal timings, and workout history to recommend optimal gym schedules.",
        "Implemented long-term memory using ChromaDB to store and retrieve past workouts for recovery-aware scheduling.",
        "Designed modular tool architecture (calendar, meals, workout memory) using LangGraph for scalable agent reasoning and future API integrations."
      ],
    },
    {
      title: "Production Churn Prediction System",
      stack: "FastAPI, Scikit-Learn, Docker, Prometheus, Grafana",
      points: [
        "Sub-100ms real-time inference API",
        "Full ETL + feature engineering pipeline",
        "Dockerized deployment",
        "Live monitoring of latency and model drift",
      ],
    },
    {
      title: "Fake News Detection API",
      stack: "FastAPI, TF-IDF, NLP, Docker, CI/CD, Render",
      points: [
        "Async FastAPI endpoints",
        "Scalable text classification",
        "CI/CD automated deployment",
        "Production-ready REST API",
      ],
    },
    {
      title: "NLP Talent Ranking System",
      stack: "TF-IDF, Cosine Similarity, Streamlit, Docker",
      points: [
        "Semantic resume ranking",
        "NLP-based job matching",
        "Interactive Streamlit UI",
        "Containerized NLP workload",
      ],
    },
  ]
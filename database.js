{
  "_meta": {
    "project": "Smart QR Code Student Attendance System",
    "version": "1.0.0",
    "description": "Initial JSON database seed & schema for GitHub repository storage or app restoration.",
    "lastUpdated": "2026-11-16"
  },
  "settings": {
    "presentTime": "07:30",
    "lateTime": "07:45",
    "schoolName": "Smart Academy"
  },
  "classes": [
    {
      "grade": "Grade 10",
      "section": "Einstein",
      "adviser": "Prof. Maria Santos",
      "schedule": "MWF 7:30 AM - 8:30 AM"
    },
    {
      "grade": "Grade 10",
      "section": "Rizal",
      "adviser": "Mr. Jose Reyes",
      "schedule": "TTH 7:30 AM - 8:30 AM"
    }
  ],
  "students": [
    {
      "name": "John Doe",
      "id": "2026-0001",
      "grade": "Grade 10",
      "section": "Einstein",
      "password": "123",
      "active": true
    },
    {
      "name": "Maria Clara",
      "id": "2026-0002",
      "grade": "Grade 10",
      "section": "Rizal",
      "password": "123",
      "active": true
    }
  ],
  "attendance": [
    {
      "student": "John Doe",
      "studentID": "2026-0001",
      "grade": "Grade 10",
      "section": "Einstein",
      "date": "2026-11-16",
      "time": "07:25:10 AM",
      "status": "Present",
      "remarks": "Self Class Scan"
    }
  ],
  "notifications": [
    {
      "message": "Attendance marked (Present) for John Doe",
      "target": "student",
      "studentID": "2026-0001",
      "date": "2026-11-16",
      "time": "07:25:10 AM"
    }
  ],
  "logs": [
    {
      "date": "2026-11-16",
      "time": "07:25:10 AM",
      "activity": "Database initialized for GitHub repository",
      "user": "System"
    }
  ]
}

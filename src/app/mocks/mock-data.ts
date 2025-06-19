import {
  OverallHoursData,
  TimesheetSummaryData,
  HoursPerProjectData,
  TimesheetsPerEmployeeData,
} from '../shared/models';
import { HoursPerEmployeeData } from '../shared/models/hours-per-employee.model';

export const MOCK_OVERALL_HOURS: OverallHoursData = { expected: 100, tracked: 30 };

export const MOCK_HOURS_PER_PROJECT: HoursPerProjectData[] = [
  {
    project: 'Creator',
    hours: 26,
    color: '#f0f0f0',
  },
  {
    project: 'Animation Project',
    hours: 42,
  },
  {
    project: 'Project 1',
    hours: 150,
    color: '#051838',
  },
  {
    project: 'Client X',
    hours: 19,
  },
  {
    project: 'Node Network',
    hours: 54,
  },
  {
    project: 'Test Status',
    hours: 46,
  },
  {
    project: 'Server Clustering',
    hours: 80,
    color: '#5d6a7d',
  },
  {
    project: 'Redis Cache',
    hours: 32,
  },
  {
    project: 'Example',
    hours: 108,
    color: '#00bcf3',
  },
];

export const MOCK_TIMESHEET_SUMMARY: TimesheetSummaryData = { expected: 100, tracked: 50 };

export const MOCK_TIMESHEET_PER_EMPLOYEE: TimesheetsPerEmployeeData[] = [
  {
    project: 'John Doe',
    tracked: 600,
    expected: 620,
  },
  {
    project: 'Jane Smith',
    tracked: 200,
    expected: 460,
  },
  {
    project: 'Bob Johnson',
    tracked: 500,
    expected: 620,
  },
  {
    project: 'Alice Brown',
    tracked: 400,
    expected: 620,
  },
  {
    project: 'Patrick Connor',
    tracked: 250,
    expected: 580,
  },
  {
    project: 'Masaki Mai',
    tracked: 600,
    expected: 610,
  },
  {
    project: 'Anne User',
    tracked: 320,
    expected: 420,
  },
];

export const MOCK_HOURS_PER_EMPLOYEE: HoursPerEmployeeData[] = [
  {
    employee: 'John Doe',
    tracked: 2,
    totalTracked: 40,
    expected: 1935,
    totalSRED: 40,
    SREDPercentage: 100,
  },
  {
    employee: 'Jane Smith',
    tracked: 18,
    totalTracked: 350,
    expected: 1935,
    totalSRED: 80,
    SREDPercentage: 22.9,
  },
  {
    employee: 'Bob Jhonson',
    tracked: 6,
    totalTracked: 119,
    expected: 1935,
    totalSRED: 40,
    SREDPercentage: 0,
  },
  {
    employee: 'Alice Brown',
    tracked: 8,
    totalTracked: 160,
    expected: 1935,
    totalSRED: 40,
    SREDPercentage: 75,
  },
  {
    employee: 'Patrick Connor',
    tracked: 4,
    totalTracked: 80,
    expected: 1935,
    totalSRED: 40,
    SREDPercentage: 50.1,
  },
  {
    employee: 'Masaki Mai',
    tracked: 16,
    totalTracked: 300,
    expected: 1935,
    totalSRED: 40,
    SREDPercentage: 73.3,
  },
];

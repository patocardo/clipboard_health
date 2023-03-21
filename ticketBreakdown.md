# Ticket Breakdown

## Ticket 1: Add custom id field to Agents table

**Feature**: Add a custom id field to the Agents table in the database, allowing Facilities to save their own custom ids for each Agent they work with.

**As** a Facility user, I want to be able to save a custom id for each Agent I work with so that I can easily identify them when generating reports.

### Acceptance Criteria:

+ A new column called "custom_id" is added to the Agents table in the database.
+ The "custom_id" field is a string field and allows null values.
+ The "custom_id" field has a length of at least 50 characters to accommodate a wide range of custom id formats.
+ The "custom_id" field is indexed for faster search performance.
+ The "custom_id" field can be updated by Facility users through the user interface.
+ When viewing an Agent's details in the user interface, the custom id field is displayed along with their name and other details.

### Time/Effort Estimate: 6 hours

### Implementation Details:

+ Connect to the database and add a new column to the Agents table using SQL commands.
+ Update the ORM or data access layer to include the new field in Agent model.
+ Update the user interface to allow Facility users to add, edit, and view the custom id field.
+ Update relevant documentation to reflect the new schema.

## Ticket 2: Update getShiftsByFacility to include custom Agent id in Shift metadata

**Feature**: Modify the getShiftsByFacility function to include the custom Agent id in the metadata for each Shift returned, allowing Facilities to see custom Agent ids on the Shifts they worked.

**As** a Facility user, I want to see the custom id for each Agent on the Shifts they worked so that I can easily identify them when generating reports.

### Acceptance Criteria:

+ The getShiftsByFacility function is modified to include the custom_id field in the metadata for each Shift returned.
+ The custom_id field is included as a string field in the metadata object, along with other Agent-related fields such as name and email.
+ If a custom_id has not been set for an Agent, the custom_id field in the metadata should be null.

### Time/Effort Estimate: 8 hours

### Implementation Details:

+ Update the getShiftsByFacility function in the backend to join the Agents table to the Shifts table and include the custom_id field in the result set.
+ Modify the data access layer or ORM to include the custom_id field in the Shift metadata object returned by getShiftsByFacility.
+ Update relevant documentation to reflect the changes made.

## Ticket 3: Modify generateReport to use custom Agent id instead of internal database id

**Feature**: Modify the generateReport function to use the custom Agent id instead of the internal database id when generating reports, allowing Facilities to see custom Agent ids on the Shifts they worked.

**As** a Facility user, I want to see the custom id for each Agent on the Shifts they worked in the reports so that I can easily identify them.

### Acceptance Criteria:

+ The generateReport function is modified to use the custom_id field instead of the internal database id for each Agent in the report.
+ The custom_id field is used in place of the internal database id throughout the report.
+ If a custom_id has not been set for an Agent, the report should use the internal database id instead.

### Time/Effort Estimate: 8 hours

### Implementation Details:

+ Modify the generateReport function in the backend to use the custom_id field in place of the internal database id when generating the report.
+ Update the report generation code to use the custom_id field throughout the report.
+ Add a fallback mechanism to use the internal database id if the custom_id is null for an Agent.
+ Update relevant documentation to reflect the changes made.

## Ticket 4: Add custom Agent id field to Agents table

**Feature**: Add a custom_id field to the Agents table in the database, allowing Facilities to save their own custom ids for each Agent they work with.

**As** a Facility user, I want to be able to save custom ids for each Agent I work with so that I can easily identify them on the Shifts they work.

### Acceptance Criteria:

+ A custom_id field is added to the Agents table in the database.
+ The custom_id field is a string field with a maximum length of 50 characters.
+ The custom_id field can be set and retrieved using the Agent API endpoints.
+ The custom_id field is included in the metadata returned by the getShiftsByFacility function.
+ The custom_id field is used in place of the internal database id throughout the platform.

### Time/Effort Estimate: 8 hours

### Implementation Details:

+ Modify the database schema to add a custom_id field to the Agents table.
+ Write a migration script to update existing Agents in the database to have a null custom_id field.
+ Update the API endpoints for Agents to include the custom_id field in their request and response objects.
+ Modify the getShiftsByFacility function in the backend to join the Agents table and include the custom_id field in the result set.
+ Update the relevant frontend components to display and use the custom_id field in place of the internal database id.
+ Update relevant documentation to reflect the changes made.

## Ticket 5: Add ability for Facilities to set custom Agent id in Shift creation form

**Feature**: Add the ability for Facilities to set a custom Agent id when creating a Shift, allowing them to associate Shifts with custom Agent ids.

**As** a Facility user, I want to be able to set a custom Agent id when creating a Shift so that I can easily identify which Shifts were worked by which Agents.

### Acceptance Criteria:

+ A new field for custom Agent id is added to the Shift creation form.
+ The custom Agent id field is optional and can be left blank.
+ The custom Agent id is saved along with the Shift in the database.
+ If a custom Agent id is provided, it is used in the Shift metadata instead of the internal database id.
+ If no custom Agent id is provided, the internal database id is used instead.

### Time/Effort Estimate: 4 hours

### Implementation Details:

+ Add a new input field for custom Agent id to the Shift creation form in the frontend.
+ Modify the Shift creation API endpoint in the backend to accept and save the custom Agent id field.
+ Update the Shift metadata returned by the getShiftsByFacility function to include the custom Agent id field, if set.
+ Update the relevant frontend components to display and use the custom Agent id field in place of the internal database id if it is set.
+ Update relevant documentation to reflect the changes made.
